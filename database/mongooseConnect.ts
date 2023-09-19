

import mongoose from "mongoose";

// CONNECTION TO OUR DATABASE USING MONGOOSE!
export const databaseConnect = async () => {
	if (mongoose?.connection?.readyState === 1) {
		return mongoose.connection.asPromise();
	} else {
		return mongoose.connect(process.env.MONGODB_URI as string);
	}
};
