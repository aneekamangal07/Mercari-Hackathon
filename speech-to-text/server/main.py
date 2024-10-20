from fastapi import FastAPI, HTTPException, Request
import uvicorn
from openai import OpenAI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPSTAGE_API_KEY = "up_O7zBLSqAUmdQvqe6FD2eKmPrt1Grp"

client = OpenAI(api_key=UPSTAGE_API_KEY, base_url="https://api.upstage.ai/v1/solar")


def create_embeddings(text):
    text = text.replace("\n", " ")
    return (
        client.embeddings.create(input=[text], model="text-embedding-3-small")
        .data[0]
        .embeddings
    )


async def query_model(user_prompt: str, system_prompt: str = None):

    if user_prompt == "":
        return "Hey can you please repeat yourself?"

    result = client.chat.completions.create(
        model="solar-pro",
        messages=[
            {
                "role": "system",
                "content": system_prompt,
            },
            {"role": "user", "content": user_prompt},
        ],
        stream=False,
    )
    return result.choices[0].message.content


@app.get("/")
def read_root():
    return "Welcome to Backend APIs"


selected_product_context = {}


class Product(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    category: Optional[str] = None
    brand: Optional[str] = None
    size: Optional[str] = None
    color: Optional[str] = None
    price: Optional[float] = None
    deals: Optional[str] = None
    query: Optional[str] = None


@app.post("/product-query")
async def handle_product_query(data: Product):
    global selected_product_context
    selected_product_context = {
        "productName": data.name,
        "productDescription": data.description,
        "productPrice": data.price,
        "productCategory": data.category,
        "productBrand": data.brand,
        "productSize": data.size,
        "productColor": data.color,
        "productDeals": data.deals,
    }

    system_prompt = f"""
    You are a lively and charming personal shopping assistant at a company that specializes in selling second-hand products. Your goal is to engage customers with short, fun, and catchy responses that not only answer their questions but also subtly convince them to make a purchase. Be playful, upbeat, and persuasive, just like a friendly salesperson who knows how to make a product sound irresistible. Keep your answers very short, crisp, to the point, and sprinkle in a bit of charm and humor to keep things interesting.    
    Product Name: {selected_product_context['productName']}
    Description: {selected_product_context['productDescription']}
    Price: ${selected_product_context['productPrice']}
    Brand: {selected_product_context['productBrand']}
    Color: {selected_product_context['productColor']}
    Deals: {selected_product_context['productDeals']}
    DO NOT give any emojis with your answer
    """

    try:
        answer = await query_model(data.query, system_prompt)
        return {"answer": answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error generating response")
