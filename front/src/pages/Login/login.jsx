import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAsync } from "../../redux/slices/authSlice";
import { useTheme } from "../../contexts/ThemeContext";
import {
    Container,
    LoginCard,
    Title,
    Form,
    FormGroup,
    Input,
    Button,
    ErrorMessage,
    LoadingMessage
} from "./styles";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const { isDarkTheme } = useTheme();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await dispatch(loginAsync({ email, password })).unwrap();
            
            if (result) {
                navigate('/');
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    const errorMessage =
        auth.error && typeof auth.error === 'object'
            ? auth.error.error || JSON.stringify(auth.error)
            : auth.error;

    return (
        <Container>
            <LoginCard theme={{ isDark: isDarkTheme }}>
                <Title theme={{ isDark: isDarkTheme }}>Login</Title>
                {auth.error && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@domain.com"
                            theme={{ isDark: isDarkTheme }}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                            theme={{ isDark: isDarkTheme }}
                            required
                        />
                    </FormGroup>
                    <Button type="submit">Entrar</Button>
                </Form>
                {auth.status === 'loading' && (
                    <LoadingMessage theme={{ isDark: isDarkTheme }}>
                        Carregando...
                    </LoadingMessage>
                )}
            </LoginCard>
        </Container>
    );
}

export default Login;