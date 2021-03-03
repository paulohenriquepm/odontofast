import React, { useEffect, useState } from 'react';

import { Container, Content, Left, Right } from './styles';

const Header = ({ isLogged }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isLogged) {
      setUser(JSON.parse(localStorage.getItem('@Odontofast:user')))
    }
  }, [isLogged])

  return (
    <Container>
      <Content>
        <Left>
          <h1>OdontoFast+</h1>
        </Left>
        {
          isLogged && user && (
            <Right>
              <button>AGENDAR CONSULTA</button>
              <div>
                <img src={user.avatar} alt={user.name} />
                <div>
                  <strong>Olá,</strong>
                  <span>{user.name}</span>
                </div>
              </div>
            </Right>
          )
        }
      </Content>
    </Container>
  )
}

export default Header