
        const hoy = new Date();
        const mesActual = hoy.getMonth(); // Devuelve el mes (0-11), donde 11 es diciembre

        if (mesActual === 11) {
          // Si es diciembre, mostramos el elemento
          // Crear las partículas de nieve
        const numSnowflakes = 100; // Número de copos de nieve

        for (let i = 0; i < numSnowflakes; i++) {
            let snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            document.body.appendChild(snowflake);

            // Establecer tamaños aleatorios más pequeños
            const size = Math.random() * 4 + 3; // Tamaño entre 3px y 7px
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`; // Mantener forma circular

            // Establecer animaciones aleatorias
            snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración entre 5 y 10 segundos
            snowflake.style.animationDelay = `${Math.random() * 5}s`; // Retardo aleatorio
            snowflake.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
            snowflake.style.top = `${Math.random() * -100}px`; // Posición vertical aleatoria al principio (para dispersarlas)
        }
      }