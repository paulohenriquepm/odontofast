import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header'

import { Container, Content, Title, Form } from './styles'

const SignUp = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const { 
            email, 
            password,
            address,
            zipcode,
            city,
            uf,
            phone,
            fixed_phone
          } = formData;

    const response = await api.post('/clients', {
      email: email,
      password: password,
      address: address,
      zipcode: zipcode,
      city: city,
      uf: uf,
      phone: phone,
      fixed_phone: fixed_phone,
    });
        
    localStorage.setItem('@Odontofast:user', JSON.stringify(response.data.user));

    history.push('/appointments');
  }, [formData, history])

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          Cadastro
        </Title>
        <Form onSubmit={handleSubmit}>
          <section>
            <div>
              <label>E-mail<span>*</span></label>
              <input type="text" name="email" onChange={handleInputChange} />
            </div>
            <div>
              <label>Senha<span>*</span></label>
              <input type="password" name="password" onChange={handleInputChange} />
            </div>
          </section>
          <section>
            <div>
              <label>Endereço<span>*</span></label>
              <input type="text" name="address" onChange={handleInputChange} />
            </div>
            <div>
              <label>CEP<span>*</span></label>
              <input type="text" name="zipcode" onChange={handleInputChange} />
            </div>
            <div>
              <label>Cidade<span>*</span></label>
              <input type="text" name="city" onChange={handleInputChange} />
            </div>
            <div>
              <label>UF<span>*</span></label>
              <input type="text" name="uf" onChange={handleInputChange} />
            </div>
          </section>
          <section>
            <div>
              <label>Telefone<span>*</span></label>
              <input type="text" name="phone" onChange={handleInputChange} />
            </div>
            <div>
              <label>Telefone (fixo)</label>
              <input type="password" name="fixed_phone" onChange={handleInputChange} />
            </div>
          </section>
        </Form>
        <button type="submit" onClick={handleSubmit}>Cadastrar</button>
      </Content>
    </Container>
  )
}

export default SignUp;