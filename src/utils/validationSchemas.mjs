export const  createUserValidationSchema = {
    username : {
        isLength : {
            options : {
            min :5,
            max : 32
            },
            errorMessage : 'Username setidaknya dari 5 - 32 karakter'
        },


        notEmpty : {
            errorMessage : "Username tidak boleh kosong"
        },
        isString : {
            errorMessage: "Username harus dalam bentuk string"
        },

       


    },
     displayName :{
            notEmpty : true
        },
}