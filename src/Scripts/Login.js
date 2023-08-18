import axios from "axios";

export default {
    data(){
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        submitForm() {
            const data = {
                username: this.username,
                password: this.password
            }

            axios.post("http://localhost:5205/Employee/Login", data).then(response => {
                console.log(response.data.message);
            })

            
        }
    }
};