



document.addEventListener('DOMContentLoaded', function () {

    
    const dataFlujos = [
        { year: '2020', materiales: 12500, reciclado: 3750 },
        { year: '2021', materiales: 13200, reciclado: 4500 },
        { year: '2022', materiales: 13800, reciclado: 5520 },
        { year: '2023', materiales: 14500, reciclado: 7250 },
        { year: '2024', materiales: 15200, reciclado: 9120 },
    ];

    const dataAprovechamiento = [
        { name: 'Reciclado', value: 60 },
        { name: 'Compostaje', value: 20 },
        { name: 'Reutilización', value: 15 },
        { name: 'Otro', value: 5 },
    ];

    
    const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#6b7280'];

    
    Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    Chart.defaults.color = '#6b7280';

    
    
    
    const ctxFlujos = document.getElementById('chartFlujos');
    if (ctxFlujos) {
        new Chart(ctxFlujos, {
            type: 'bar',
            data: {
                labels: dataFlujos.map(d => d.year),
                datasets: [
                    {
                        label: 'Total Materiales (ton)',
                        data: dataFlujos.map(d => d.materiales),
                        backgroundColor: '#3b82f6',
                        borderColor: '#3b82f6',
                        borderWidth: 1,
                    },
                    {
                        label: 'Reciclado (ton)',
                        data: dataFlujos.map(d => d.reciclado),
                        backgroundColor: '#10b981',
                        borderColor: '#10b981',
                        borderWidth: 1,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.dataset.label + ': ' + context.parsed.y.toLocaleString() + ' ton';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return value.toLocaleString();
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    
    
    
    const ctxAprovechamiento = document.getElementById('chartAprovechamiento');
    if (ctxAprovechamiento) {
        new Chart(ctxAprovechamiento, {
            type: 'pie',
            data: {
                labels: dataAprovechamiento.map(d => d.name),
                datasets: [{
                    data: dataAprovechamiento.map(d => d.value),
                    backgroundColor: COLORS,
                    borderColor: '#ffffff',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    
    
    
    const ctxCircularidad = document.getElementById('chartCircularidad');
    if (ctxCircularidad) {
        
        const circularidadData = dataFlujos.map(d =>
            Math.round((d.reciclado / d.materiales) * 100)
        );

        new Chart(ctxCircularidad, {
            type: 'line',
            data: {
                labels: dataFlujos.map(d => d.year),
                datasets: [{
                    label: '% Circularidad',
                    data: circularidadData,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 7,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.dataset.label + ': ' + context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function (value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    
    
    
    const exportButtons = document.querySelectorAll('.export-buttons .btn');
    exportButtons.forEach(button => {
        button.addEventListener('click', function () {
            const format = this.textContent.trim().split(' ')[1]; 
            console.log('Exportando en formato:', format);
            
            alert('Funcionalidad de exportación ' + format + ' - Implementar en el backend');
        });
    });

});