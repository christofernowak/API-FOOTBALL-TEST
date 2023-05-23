import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Player {
  name: string;
  age: number;
  nationality: string;
}

interface Formation {
  // Defina a estrutura da formação
}

interface TeamStatistics {
  // Defina a estrutura das estatísticas do time
}

interface GoalStatistics {
  // Defina a estrutura das estatísticas de gols
}

function TeamPage() {
  const { teamId } = useParams<{ teamId: string }>();
  const [players, setPlayers] = useState<Player[]>([]);
  const [formation, setFormation] = useState<Formation | null>(null);
  const [teamStatistics, setTeamStatistics] = useState<TeamStatistics | null>(null);
  const [goalStatistics, setGoalStatistics] = useState<GoalStatistics | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        // Obter lista de jogadores do time
        const playersResponse = await axios.get(`https://api.example.com/teams/${teamId}/players`);
        setPlayers(playersResponse.data);

        // Obter formação mais utilizada na temporada
        const formationResponse = await axios.get(`https://api.example.com/teams/${teamId}/formation`);
        setFormation(formationResponse.data);

        // Obter estatísticas do time
        const teamStatisticsResponse = await axios.get(`https://api.example.com/teams/${teamId}/statistics`);
        setTeamStatistics(teamStatisticsResponse.data);

        // Obter estatísticas de gols
        const goalStatisticsResponse = await axios.get(`https://api.example.com/teams/${teamId}/goal-statistics`);
        setGoalStatistics(goalStatisticsResponse.data);
      } catch (error) {
        console.error('Erro ao obter dados do time', error);
        alert('Ocorreu um erro ao obter os dados do time. Por favor, tente novamente.');
      }
    };

    fetchTeamData();
  }, [teamId]);

  return (
    <div>
      {/* Exibir informações do time, jogadores, formação, estatísticas etc. */}
    </div>
  );
}

export default TeamPage;
