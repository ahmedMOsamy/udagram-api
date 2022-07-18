import * as dotenv from 'dotenv';
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
	username: `${process.env.POSTGRES_USERNAME}`,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	port: Number(process.env.PORT),
	dbPort: Number(process.env.DB_PORT),
	host: process.env.POSTGRES_HOST,
	dialect: 'postgres',
	aws_region: process.env.AWS_REGION,
	aws_profile: process.env.AWS_PROFILE,
	aws_media_bucket: process.env.AWS_BUCKET,
	url: process.env.URL,
	aws_access_key: process.env.AWS_ACCESS_KEY,
	aws_secret: process.env.AWS_SECRET,
	jwt: {
		secret: process.env.JWT_SECRET,
	},
};
