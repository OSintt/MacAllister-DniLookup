import { useEffect, useContext } from "react";
import axios from 'axios';
import { config } from '../../config';
import { UserContext } from '../../context/UserContext';
import { toast } from "react-hot-toast";
export function Auth() {
    const { login, user } = useContext(UserContext);
    useEffect(() => {
        const getUser = async () => {
          try {
            const res = await axios.get(config.DOMAIN + '/v1/auth/@me', {
              headers: {
                'x-access-token': localStorage.getItem('token')
              }
            });
            login(res.data.user);
            toast.success(`¡Bienvenido de vuelta ${res.data.user.username}!`)
          } catch(e) {
            console.log(e);
          }
        }
        getUser();
    }, []);

    return (
      <></>
    )
}