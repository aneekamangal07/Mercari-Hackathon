import { Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { MdSaveAlt } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useSpeechRecognition } from '../../react-speech/src';
import { useSpeechSynthesis } from '../../react-speech/src';
import axios from 'axios';

const DescriptionPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  const [text, setText] = useState('');
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [avatarSize, setAvatarSize] = useState(12);

  const onEnd = () => {
    setVideoPlaying(false);
    setAvatarSize(12);
  }

  const { speak, voices, speaking } = useSpeechSynthesis({ onEnd });


  const onResult = (result) => {
    setTranscript(prev => `${prev} ${result}`);
  };

  const { listen, stop } = useSpeechRecognition({ onResult });
  const videoSrc = '/avataar.webm';

  const toggleListening = () => {
    if (listening) {
      stop();
      sendTranscriptToBackend();
      setListening(false);
      setAvatarSize(16);
    } else {
      listen({ interimResults: false });
      setTranscript('');
      setListening(true);
      setAvatarSize(16);
    }
  };

  const sendTranscriptToBackend = async () => {
    try {
      console.log(transcript);
      const productdetails = {
        "name": info.name,
        "description": info.description,
        "category": info.category,
        "brand": info.brand,
        "size": info.size,
        "color": info.color,
        "deals": info.deals,
        "price": info.price,
        "query": transcript
      }
      console.log(productdetails);
      const response = await axios.post('http://127.0.0.1:8000/product-query', productdetails );
      console.log(response.data);
      setText(response.data.answer);
    } catch (error) {
      console.error('Error sending transcript:', error);
    }
  };

  useEffect(() => {
    const selectedVoice = voices.find((v) => v.voiceURI ==='Google UK English Female');
    console.log(text, speaking);
    if (text && speaking) {
      setVideoPlaying(true); 
      speak({ text: text, voice: selectedVoice, rate: 1 });
    }
  }, [text]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel(); 
    };
  }, []);

  useEffect(() => {
    if (text && speaking) {
      setVideoPlaying(true);
    } else {
      setVideoPlaying(false);
    }
  }, [text]);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://mercari-backend.onrender.com/api/products/id/${id}`,
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsondata = await response.json();
      console.log('data ', jsondata.product);
      setInfo(jsondata.product);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/2 h-screen flex items-center justify-center p-4 pr-6">
        <img
          src={
            info.image_url ||
            'https://m.media-amazon.com/images/I/51vC37KDe9L._AC_UY580_.jpg'
          }
          alt={info.name}
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="font-semibold text-2xl flex justify-normal w-full">
          {info.name || 'Product Title'}
        </div>
        <div className="flex items-start w-full mt-4 font-medium p-3">
          ¥<span className="font-semibold text-xl">{info.price || '0'}</span>
        </div>
        <div className="flex items-start w-full">
          <div className="border border-black p-2 m-2">
            <Heart />
          </div>
          <div className="border border-black p-2 m-2 text-2xl">
            <MdSaveAlt />
          </div>
        </div>
        <button className="p-3 bg-red-400 m-3 font-semibold w-full">
          Buy Now
        </button>
        <div>
          <div className="text-2xl">Item Description</div>
          <div className="p-4">
            {info.description || 'No description available.'}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="text-2xl w-full flex items-start pb-2">
            Item Details
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Category :</div>
            <div>{info.category || 'Unknown'}</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Brand :</div>
            <div>{info.brand || 'Unknown'}</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Size :</div>
            <div>{info.size || 'Unknown'}</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Deals :</div>
            <div>{info.deals || 'No deals available'}</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Color :</div>
            <div>{info.color || 'Unknown'}</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '-5px', left: '0' }}>
          {videoPlaying ? (
            <video loop autoPlay muted playsInline style={{ width: '45%', height: 'auto', opacity: 1, transition: 'opacity 2.5s ease-in-out' }}>
              <source src={videoSrc} type="video/webm" />
            </video>
          ) : (
            <img src='/avatar.png' alt="Background" style={{ width: `${avatarSize}%`, height: 'auto', opacity: videoPlaying ? 0 : 1, transition: 'opacity 2.5s ease-in-out' }} onClick={toggleListening}  />
          )}
      </div>
    </div>
  );
};

export default DescriptionPage;
