const ctx1 = document.getElementById('socialMediaChart').getContext('2d');
const socialMediaChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
        datasets: [{
            label: 'Tempo médio (horas/dia)',
            data: [2.5, 2.0, 1.5, 1.0, 1.8],
            backgroundColor: [
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Horas por Dia'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Uso Médio das Redes Sociais'
            }
        }
    }
});

// Gráfico de estatísticas de usuários
const ctx2 = document.getElementById('userStatisticsChart').getContext('2d');
const userStatisticsChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Usuários de Redes Sociais', 'Não Usuários'],
        datasets: [{
            label: 'Porcentagem de Usuários',
            data: [73, 27], // 73% usam, 27% não usam
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribuição de Usuários de Redes Sociais'
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const data = tooltipItem.dataset.data[tooltipItem.dataIndex];
                        const total = tooltipItem.dataset.data.reduce((acc, val) => acc + val, 0);
                        const percentage = ((data / total) * 100).toFixed(0);
                        return `${tooltipItem.label}: ${percentage}%`;
                    }
                }
            }
        }
    }
});
