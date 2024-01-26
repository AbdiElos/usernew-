import api from "../apiConfig/api";
export const signin = async (Email,Password) => {
    try {
        console.log(`am running`);
         const response = await api.post(`/accounts/login`, {
            email: Email,
            password:Password
        });
        return { success: true, data: response.data };
    } catch (err) {
        if (err.response) {
            return { success: false, data: null, error: err.message };
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
};


export const signup = async (data) => {
    try {
        console.log(`am running`,data);
        
         const response = await api.post(`/accounts/register`, {
          
            username: data.username,
            email: data.email,
            password:data.password,
            //confirmpassword:data.confirmpassword,
        });
        return { success: true, data: response.data };
    } catch (err) {
        if (err.response) {
            return { success: false, data: null, error: err.message };
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
};

export const forgotPassword = async (Email) => {
    try {
        console.log(`am running`);
         const response = await api.post(`/accounts/forgot-password`, {
            email: Email
        });
        return { success: true, data: response.data };
    } catch (err) {
        if (err.response) {
            return { success: false, data: null, error: err.message };
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
};

// export const verification = async (verificationToken) => {
//     try {
//         console.log(`am running`, );
//          const response = await api.post(`/accounts/verify-email`, {
//             token: verificationToken
//         });
//         return { success: true, data: response.data};
//     } catch (err) {
//         if (err.response) {
//             return { success: false, data: null, error: err.message };
//         } else {
//             console.log(`Error: ${err.message}`);
//         }
//     }
// };

