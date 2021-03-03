import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header'

import { Container, Content, Title } from './styles'

const Appointment = () => {
  const [appointments, setAppointments] = useState([]); 

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('/appointments');

      if (response.data.length > 0) {
        setAppointments(response.data);
      }
    }

    loadAppointments();
  }, [])

  return (
    <Container>
      <Header isLogged />
      <Content>
        <Title>
          Agendamentos
        </Title>
        {appointments.length === 0 ? (
          <div>
            <span>Você ainda não possui agendamentos</span>
          </div>
        ) : (
          <div>
            {appointments.map(appointment => (
              <div>{appointment.dentist_name}</div>
            ))}
          </div>
        )}
      </Content>
    </Container>
  )
}

export default Appointment;