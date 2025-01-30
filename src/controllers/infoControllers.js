import { configDotenv } from "dotenv";

configDotenv();

export const getParticipantsInfo = async (req, res) => {
    try {
        const email = process.env.EMAIL;
        const githubUrl = process.env.GITHUB_URL;
        const currentDate = new Date().toISOString();

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email not found. Please add an email!"
            });
        }

        if (!githubUrl) {
            return res.status(400).json({
                success: false,
                message: "GitHub URL not found. Please add a GitHub URL!"
            });
        }

        return res.status(200).json({
            success: true,
            email: email,
            current_datetime: currentDate,
            github_url: githubUrl
        });

    } catch (error) {
        console.error("Internal server error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error. Please try again later."
        });
    }
};
