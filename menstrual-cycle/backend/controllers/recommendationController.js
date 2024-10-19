const recommendationService = require('../services/recommendationService');
const User = require('../models/User');

// Get recommendations based on user's cycle
exports.getRecommendations = async (req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const recommendations = await recommendationService.getProductRecommendations(user.menstrualCycleData);
        res.status(200).json({ recommendations });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
