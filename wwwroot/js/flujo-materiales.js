




document.addEventListener('DOMContentLoaded', function () {

    
    
    

    const sankeyContainer = document.getElementById('sankeyDiagram');

    if (sankeyContainer && typeof Plotly !== 'undefined') {

        
        
        const nodes = [
            
            'Materias Primas',           
            'Productos Importados',      
            'Recursos Naturales',        
            'Materiales Reciclados',     

            
            'Sector Industrial',         
            'Sector Construcción',       
            'Comercio y Servicios',      
            'Consumo Residencial',       

            
            'Productos Finales',         
            'Infraestructura',           

            
            'Residuos Sólidos',          
            'Aprovechamiento',           
            'Disposición Final',         
            'Exportaciones',             
        ];

        
        const links = {
            source: [
                
                0, 0, 1, 1, 2, 2, 3, 3,  

                
                4, 4, 5, 6, 6, 7,

                
                8, 8, 9, 10, 10,

                
                11
            ],
            target: [
                
                4, 5, 4, 6, 5, 7, 4, 7,

                
                8, 13, 9, 8, 13, 8,

                
                10, 13, 10, 11, 12,

                
                3
            ],
            value: [
                
                4500, 2800, 3200, 1800, 1500, 800, 2100, 900,

                
                5200, 1400, 2800, 2100, 1500, 1200,

                
                6800, 1700, 2800, 4100, 2700,

                
                2100
            ]
        };

        
        const nodeColors = [
            
            '#3b82f6', '#3b82f6', '#3b82f6', '#8b5cf6',

            
            '#10b981', '#10b981', '#10b981', '#10b981',

            
            '#22c55e', '#22c55e',

            
            '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'
        ];

        
        const data = [{
            type: "sankey",
            orientation: "h",
            node: {
                pad: 15,
                thickness: 20,
                line: {
                    color: "white",
                    width: 2
                },
                label: nodes,
                color: nodeColors,
                customdata: nodes.map((_, i) => `Nodo ${i}`),
                hovertemplate: '<b>%{label}</b><br>Total: %{value:,.0f} ton/año<extra></extra>'
            },
            link: {
                source: links.source,
                target: links.target,
                value: links.value,
                color: links.source.map(s => {
                    
                    const alpha = '40'; 
                    return nodeColors[s] + alpha;
                }),
                hovertemplate: '<b>%{source.label}</b> → <b>%{target.label}</b><br>Flujo: %{value:,.0f} ton/año<extra></extra>'
            }
        }];

        
        const layout = {
            title: {
                text: 'Flujo de Materiales - Área Metropolitana Valle de Aburrá 2024',
                font: {
                    size: 18,
                    family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    color: '#1f2937'
                }
            },
            font: {
                size: 12,
                family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            },
            plot_bgcolor: '#f9fafb',
            paper_bgcolor: '#f9fafb',
            margin: {
                l: 20,
                r: 20,
                t: 60,
                b: 20
            },
            height: 512
        };

        
        const config = {
            responsive: true,
            displayModeBar: true,
            displaylogo: false,
            modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d'],
            toImageButtonOptions: {
                format: 'png',
                filename: 'flujo_materiales_amva',
                height: 800,
                width: 1200,
                scale: 2
            }
        };

        
        Plotly.newPlot('sankeyDiagram', data, layout, config);

        
        console.log('Diagrama de Sankey renderizado exitosamente');
        console.log('Total de nodos:', nodes.length);
        console.log('Total de flujos:', links.source.length);

    } else if (!sankeyContainer) {
        console.error('Contenedor #sankeyDiagram no encontrado');
    } else if (typeof Plotly === 'undefined') {
        console.error('Plotly.js no está cargado');
    }

    
    
    

    const downloadButtons = document.querySelectorAll('.documento-card .btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.documento-card');
            const documentTitle = card.querySelector('.documento-title').textContent;
            const format = card.querySelector('.documento-format').textContent;

            console.log('Descargando:', documentTitle, '-', format);

            
            alert(`Descargando: ${documentTitle}\nFormato: ${format}\n\nImplementar lógica de descarga en el backend.`);

            
            
        });
    });

});