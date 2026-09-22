/* ============================================================
   CONFIGURACIÓN PERSONAL

   ESTA ES LA PARTE QUE MÁS TE INTERESA MODIFICAR.
============================================================ */

const CONFIG = {

    // Nombre de ella
    herName: "Gabriela",

    // Tu nombre
    yourName: "Carlos",

    /*
        CAMBIA ESTA FECHA POR EL DÍA
        EN QUE COMENZARON.

        Formato:
        año-mes-día

        Ejemplo:
        2024-08-17
    */

    relationshipStart:
        "2024-05-20",


    /* ========================================================
       RECUERDOS
    ======================================================== */

    memories: [

        {
            title:
                "Ese día",

            text:
                "Uno de esos momentos que probablemente parecían normales, pero terminaron convirtiéndose en un recuerdo hermoso."
        },

        {
            title:
                "Tu sonrisa",

            text:
                "Hay fotografías bonitas, y luego están las que guardan algo que una cámara nunca podría explicar."
        },

        {
            title:
                "Una aventura",

            text:
                "Porque a veces el lugar es lo de menos cuando la compañía hace especial el momento."
        },

        {
            title:
                "Nosotros",

            text:
                "Un instante sencillo que terminó teniendo muchísimo más significado."
        },

        {
            title:
                "Otro capítulo",

            text:
                "Cada recuerdo es una pequeña página de una historia que todavía continúa."
        },

        {
            title:
                "Lo que falta",

            text:
                "Quizás las mejores fotografías todavía ni siquiera han sido tomadas."
        }

    ],


    /* ========================================================
       RAZONES
    ======================================================== */

    reasons: [

        "Por la forma en que una sonrisa puede cambiar completamente un día.",

        "Por todos esos momentos que terminaron siendo especiales sin haberlos planeado.",

        "Porque hay personas que hacen que incluso los días normales se sientan distintos.",

        "Por las conversaciones, las ocurrencias y todos esos detalles pequeños.",

        "Porque los mejores recuerdos casi nunca comienzan diciendo: “este será un gran recuerdo”.",

        "Y porque todavía quedan muchísimas historias por vivir."

    ],


    /* ========================================================
       FLORES SECRETAS
    ======================================================== */

    secretMessages: [

        "Nunca subestimes lo especial que puede ser tu presencia en la vida de alguien.",

        "Que nunca te falten razones para sentirte orgullosa de la persona que eres.",

        "Hay sonrisas capaces de iluminar un lugar sin necesidad de ninguna lámpara.",

        "Ojalá la vida te devuelva multiplicadas todas las cosas bonitas que entregas.",

        "Que siempre existan días capaces de convertirse en recuerdos inolvidables.",

        "Las flores son bonitas, pero algunas personas consiguen que hasta ellas parezcan un detalle pequeño.",

        "Esta última flor guarda algo sencillo: nunca olvides lo valiosa que eres."

    ],


    /* ========================================================
       CARTA

       Personaliza esto todo lo que quieras.
    ======================================================== */

    letter: `Hoy podría haber sido mucho más fácil simplemente comprar flores.

Pero quería hacer algo diferente.

Algo que necesitara tiempo.

Algo que no existiera antes de pensar en ti.

Por eso cada flor que viste aquí, cada pequeño movimiento, cada estrella y cada palabra fueron colocados para construir este momento.

Las flores amarillas duran algunos días.

Una fotografía puede durar años.

Pero existen personas y momentos que consiguen quedarse muchísimo más tiempo.

Hoy simplemente quería recordarte algo:

que eres una persona increíblemente especial.

Que nunca olvides el valor que tienes, todo lo bonito que aportas y la cantidad de momentos que todavía te esperan.

Quizás este sea solamente un montón de código funcionando detrás de una pantalla.

Pero detrás de cada línea hubo una intención:

hacerte sonreír.

Feliz día de las flores amarillas. 💛`

};


/* ============================================================
   ELEMENTOS
============================================================ */

const startButton =
    document.getElementById(
        "startButton"
    );

const cover =
    document.getElementById(
        "cover"
    );

const music =
    document.getElementById(
        "bgMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );

const flowerField =
    document.getElementById(
        "flowerField"
    );

const reasonsGrid =
    document.getElementById(
        "reasonsGrid"
    );

const interactiveFlowers =
    document.getElementById(
        "interactiveFlowers"
    );

const gardenCounter =
    document.getElementById(
        "gardenCounter"
    );

const gardenProgressBar =
    document.getElementById(
        "gardenProgressBar"
    );

const messageModal =
    document.getElementById(
        "messageModal"
    );

const modalMessage =
    document.getElementById(
        "modalMessage"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const openLetterButton =
    document.getElementById(
        "openLetterButton"
    );

const letter =
    document.getElementById(
        "letter"
    );

const typedLetter =
    document.getElementById(
        "typedLetter"
    );

const finalSurpriseButton =
    document.getElementById(
        "finalSurpriseButton"
    );

const finalOverlay =
    document.getElementById(
        "finalOverlay"
    );

const closeFinal =
    document.getElementById(
        "closeFinal"
    );


/* ============================================================
   START
============================================================ */

let experienceStarted =
    false;


startButton.addEventListener(
    "click",
    startExperience
);


function startExperience() {

    if (
        experienceStarted
    ) {
        return;
    }

    experienceStarted =
        true;

    document.body.classList.add(
        "started"
    );


    /*
        La música solamente puede comenzar
        después de una interacción del usuario.
    */

    music.volume =
        0.45;

    music
        .play()
        .then(() => {

            musicButton
                .classList
                .add(
                    "playing"
                );

        })
        .catch(() => {

            console.log(
                "No se encontró música o el navegador la bloqueó."
            );

        });


    musicButton.classList.remove(
        "hidden"
    );


    createFlowerField();


    setTimeout(
        () => {

            cover.classList.add(
                "hide"
            );

        },
        700
    );


    startPetals();

}


/* ============================================================
   MUSIC BUTTON
============================================================ */

musicButton.addEventListener(
    "click",
    () => {

        if (
            music.paused
        ) {

            music.play();

            musicButton
                .classList
                .add(
                    "playing"
                );

            musicButton.textContent =
                "♫";

        } else {

            music.pause();

            musicButton
                .classList
                .remove(
                    "playing"
                );

            musicButton.textContent =
                "♪";

        }

    }
);


/* ============================================================
   HERO FLOWERS
============================================================ */

function createFlowerField() {

    const totalFlowers =
        window.innerWidth < 700
            ? 12
            : 22;


    for (
        let i = 0;
        i < totalFlowers;
        i++
    ) {

        const flower =
            createSunflower();


        const x =
            Math.random() * 100;


        const scale =
            0.45 +
            Math.random() *
            0.8;


        const delay =
            Math.random() *
            2;


        flower.style.left =
            `${x}%`;


        flower.style.transform =
            `scale(${scale})`;


        flower.style.animationDelay =
            `${delay}s`;


        flower.style.opacity =
            0.5 +
            Math.random() *
            0.5;


        flowerField.appendChild(
            flower
        );

    }

}


function createSunflower() {

    const flower =
        document.createElement(
            "div"
        );


    flower.className =
        "sunflower";


    const stem =
        document.createElement(
            "div"
        );


    stem.className =
        "stem";


    const leaf1 =
        document.createElement(
            "div"
        );


    leaf1.className =
        "leaf leaf-left";


    const leaf2 =
        document.createElement(
            "div"
        );


    leaf2.className =
        "leaf leaf-right";


    stem.appendChild(
        leaf1
    );


    stem.appendChild(
        leaf2
    );


    const head =
        createFlowerHead();


    flower.appendChild(
        stem
    );


    flower.appendChild(
        head
    );


    return flower;

}


/* ============================================================
   GENERADOR DE CABEZA DE FLOR
============================================================ */

function createFlowerHead() {

    const head =
        document.createElement(
            "div"
        );


    head.className =
        "flower-head";


    const petals =
        18;


    for (
        let i = 0;
        i < petals;
        i++
    ) {

        const petal =
            document.createElement(
                "div"
            );


        petal.className =
            "flower-petal";


        petal.style.transform =
            `rotate(${i * (360 / petals)}deg)
             translateY(-30px)`;


        head.appendChild(
            petal
        );

    }


    const center =
        document.createElement(
            "div"
        );


    center.className =
        "flower-center";


    head.appendChild(
        center
    );


    return head;

}


/* ============================================================
   STARS
============================================================ */

const starsCanvas =
    document.getElementById(
        "starsCanvas"
    );


const starCtx =
    starsCanvas.getContext(
        "2d"
    );


let stars =
    [];


function resizeStars() {

    starsCanvas.width =
        window.innerWidth;


    starsCanvas.height =
        window.innerHeight;


    createStars();

}


function createStars() {

    stars = [];


    const amount =
        Math.floor(
            window.innerWidth /
            7
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        stars.push({

            x:
                Math.random() *
                starsCanvas.width,

            y:
                Math.random() *
                starsCanvas.height,

            radius:
                Math.random() *
                1.5,

            alpha:
                Math.random(),

            speed:
                0.002 +
                Math.random() *
                0.007

        });

    }

}


function drawStars() {

    starCtx.clearRect(
        0,
        0,
        starsCanvas.width,
        starsCanvas.height
    );


    stars.forEach(
        star => {

            star.alpha +=
                star.speed;


            if (
                star.alpha >= 1 ||
                star.alpha <= 0.2
            ) {

                star.speed *=
                    -1;

            }


            starCtx.beginPath();


            starCtx.arc(
                star.x,
                star.y,
                star.radius,
                0,
                Math.PI * 2
            );


            starCtx.fillStyle =
                `rgba(
                    255,
                    236,
                    166,
                    ${star.alpha}
                )`;


            starCtx.fill();

        }
    );


    requestAnimationFrame(
        drawStars
    );

}


window.addEventListener(
    "resize",
    resizeStars
);


resizeStars();
drawStars();


/* ============================================================
   FALLING PETALS
============================================================ */

const petalLayer =
    document.getElementById(
        "petalLayer"
    );


let petalInterval;


function startPetals() {

    if (
        petalInterval
    ) {
        return;
    }


    petalInterval =
        setInterval(
            createFallingPetal,
            500
        );

}


function createFallingPetal() {

    const petal =
        document.createElement(
            "div"
        );


    petal.className =
        "falling-petal";


    petal.style.left =
        `${Math.random() * 100}%`;


    const duration =
        7 +
        Math.random() *
        7;


    petal.style.animationDuration =
        `${duration}s`;


    petal.style.setProperty(
        "--drift",
        `${-150 + Math.random() * 300}px`
    );


    petal.style.setProperty(
        "--rotation",
        `${360 + Math.random() * 720}deg`
    );


    petal.style.opacity =
        0.4 +
        Math.random() *
        0.6;


    petalLayer.appendChild(
        petal
    );


    setTimeout(
        () => {

            petal.remove();

        },
        duration * 1000
    );

}


/* ============================================================
   SCROLL REVEAL
============================================================ */

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );

                    }

                }
            );

        },

        {
            threshold:
                0.15
        }

    );


document
    .querySelectorAll(
        ".reveal-on-scroll"
    )
    .forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );


/* ============================================================
   DAYS COUNTER
============================================================ */

function calculateDays() {

    const start =
        new Date(
            CONFIG.relationshipStart
        );


    const today =
        new Date();


    const diff =
        today - start;


    const days =
        Math.max(
            0,
            Math.floor(
                diff /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            )
        );


    animateNumber(
        document.getElementById(
            "daysCounter"
        ),
        days
    );

}


function animateNumber(
    element,
    target
) {

    let current =
        0;


    const duration =
        2000;


    const increment =
        target /
        (
            duration /
            16
        );


    function update() {

        current +=
            increment;


        if (
            current >= target
        ) {

            element.textContent =
                target;

            return;

        }


        element.textContent =
            Math.floor(
                current
            );


        requestAnimationFrame(
            update
        );

    }


    update();

}


calculateDays();


/* ============================================================
   MEMORIES
============================================================ */

CONFIG.memories.forEach(

    (
        memory,
        index
    ) => {

        const position =
            index + 1;


        const title =
            document.getElementById(
                `memoryTitle${position}`
            );


        const text =
            document.getElementById(
                `memoryText${position}`
            );


        if (
            title
        ) {

            title.textContent =
                memory.title;

        }


        if (
            text
        ) {

            text.textContent =
                memory.text;

        }

    }

);


/* ============================================================
   IMAGE FALLBACK
============================================================ */

document
    .querySelectorAll(
        ".photo-frame img"
    )
    .forEach(
        image => {

            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                }
            );

        }
    );


/* ============================================================
   REASONS
============================================================ */

CONFIG.reasons.forEach(

    (
        reason,
        index
    ) => {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "reason-card reveal-on-scroll";


        card.innerHTML =
            `

            <span class="reason-number">

                ${String(
                    index + 1
                ).padStart(
                    2,
                    "0"
                )}

            </span>

            <h3>
                ${reason}
            </h3>

            <div class="reason-glow"></div>

            `;


        reasonsGrid.appendChild(
            card
        );


        revealObserver.observe(
            card
        );

    }

);


/* ============================================================
   SECRET GARDEN
============================================================ */

let flowersFound =
    0;


CONFIG.secretMessages.forEach(

    (
        message,
        index
    ) => {

        const flower =
            createSecretFlower(
                index
            );


        flower.addEventListener(

            "click",

            () => {

                if (
                    flower.classList
                        .contains(
                            "found"
                        )
                ) {

                    showModal(
                        message
                    );

                    return;

                }


                flower.classList.add(
                    "found"
                );


                flowersFound++;


                updateGardenProgress();


                showModal(
                    message
                );


                burstParticles(
                    flower
                );

            }

        );


        interactiveFlowers
            .appendChild(
                flower
            );

    }

);


function createSecretFlower(
    index
) {

    const flower =
        document.createElement(
            "div"
        );


    flower.className =
        "secret-flower";


    flower.style.transform =
        `scale(${
            0.85 +
            Math.random() *
            0.3
        })`;


    const stem =
        document.createElement(
            "div"
        );


    stem.className =
        "flower-stem";


    const button =
        document.createElement(
            "button"
        );


    button.className =
        "flower-button";


    for (
        let i = 0;
        i < 16;
        i++
    ) {

        const petal =
            document.createElement(
                "div"
            );


        petal.className =
            "petal";


        petal.style.transform =
            `rotate(${i * 22.5}deg)
             translateY(-27px)`;


        button.appendChild(
            petal
        );

    }


    const center =
        document.createElement(
            "div"
        );


    center.className =
        "center";


    button.appendChild(
        center
    );


    flower.appendChild(
        stem
    );


    flower.appendChild(
        button
    );


    return flower;

}


function updateGardenProgress() {

    gardenCounter.textContent =
        `${flowersFound} / ${CONFIG.secretMessages.length}`;


    const percentage =
        (
            flowersFound /
            CONFIG.secretMessages.length
        ) *
        100;


    gardenProgressBar.style.width =
        `${percentage}%`;


    if (
        flowersFound ===
        CONFIG.secretMessages.length
    ) {

        setTimeout(
            () => {

                modalMessage.textContent =
                    "Encontraste todas. Ahora todavía queda una parte importante del regalo…";

            },
            800
        );

    }

}


/* ============================================================
   MODAL
============================================================ */

function showModal(
    message
) {

    modalMessage.textContent =
        message;


    messageModal.classList.add(
        "show"
    );

}


function hideModal() {

    messageModal.classList.remove(
        "show"
    );

}


closeModal.addEventListener(
    "click",
    hideModal
);


document
    .querySelector(
        ".modal-backdrop"
    )
    .addEventListener(
        "click",
        hideModal
    );


/* ============================================================
   SMALL BURST
============================================================ */

function burstParticles(
    flower
) {

    const rect =
        flower.getBoundingClientRect();


    const x =
        rect.left +
        rect.width /
        2;


    const y =
        rect.top +
        60;


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.style.position =
            "fixed";


        particle.style.left =
            `${x}px`;


        particle.style.top =
            `${y}px`;


        particle.style.width =
            "5px";


        particle.style.height =
            "5px";


        particle.style.borderRadius =
            "50%";


        particle.style.background =
            "#ffd83d";


        particle.style.pointerEvents =
            "none";


        particle.style.zIndex =
            "25000";


        document.body.appendChild(
            particle
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            60 +
            Math.random() *
            100;


        const destinationX =
            Math.cos(
                angle
            ) *
            distance;


        const destinationY =
            Math.sin(
                angle
            ) *
            distance;


        particle.animate(

            [

                {
                    transform:
                        "translate(0,0) scale(1)",

                    opacity:
                        1
                },

                {
                    transform:
                        `translate(
                            ${destinationX}px,
                            ${destinationY}px
                        )
                        scale(0)`,

                    opacity:
                        0
                }

            ],

            {

                duration:
                    800 +
                    Math.random() *
                    400,

                easing:
                    "ease-out"

            }

        );


        setTimeout(
            () => {

                particle.remove();

            },
            1300
        );

    }

}


/* ============================================================
   LETTER
============================================================ */

let letterStarted =
    false;


openLetterButton.addEventListener(
    "click",
    () => {

        letter.classList.add(
            "open"
        );


        openLetterButton.style.display =
            "none";


        if (
            !letterStarted
        ) {

            letterStarted =
                true;


            setTimeout(
                typeLetter,
                1000
            );

        }

    }
);


function typeLetter() {

    const text =
        CONFIG.letter;


    let index =
        0;


    typedLetter.textContent =
        "";


    function type() {

        if (
            index <
            text.length
        ) {

            typedLetter.textContent +=
                text.charAt(
                    index
                );


            index++;


            let delay =
                18;


            const char =
                text.charAt(
                    index - 1
                );


            if (
                char === "." ||
                char === "!" ||
                char === "?"
            ) {

                delay =
                    200;

            }


            if (
                char === "\n"
            ) {

                delay =
                    250;

            }


            setTimeout(
                type,
                delay
            );

        }

    }


    type();

}


/* ============================================================
   NAMES
============================================================ */

document.getElementById(
    "letterGreeting"
).textContent =
    `Para ${CONFIG.herName}:`;


document.getElementById(
    "letterSignature"
).textContent =
    `— ${CONFIG.yourName}`;


document.getElementById(
    "finalName"
).textContent =
    `${CONFIG.herName} · 21 de septiembre`;


document.getElementById(
    "finalOverlayTitle"
).textContent =
    CONFIG.herName;


/* ============================================================
   FINAL FLOWER
============================================================ */

function createFinalFlower() {

    const container =
        document.getElementById(
            "finalFlower"
        );


    const head =
        createFlowerHead();


    head.style.position =
        "relative";


    container.appendChild(
        head
    );

}


createFinalFlower();


/* ============================================================
   GRAND FINALE
============================================================ */

finalSurpriseButton
    .addEventListener(

        "click",

        () => {

            finalOverlay.classList.add(
                "show"
            );


            startConfetti();

        }

    );


closeFinal.addEventListener(

    "click",

    () => {

        finalOverlay.classList.remove(
            "show"
        );


        stopConfetti();

    }

);


/* ============================================================
   CONFETTI
============================================================ */

const confettiCanvas =
    document.getElementById(
        "confettiCanvas"
    );


const confettiCtx =
    confettiCanvas.getContext(
        "2d"
    );


let confetti =
    [];


let confettiAnimation =
    null;


function resizeConfetti() {

    confettiCanvas.width =
        window.innerWidth;


    confettiCanvas.height =
        window.innerHeight;

}


window.addEventListener(
    "resize",
    resizeConfetti
);


resizeConfetti();


function startConfetti() {

    confetti = [];


    for (
        let i = 0;
        i < 170;
        i++
    ) {

        confetti.push({

            x:
                Math.random() *
                confettiCanvas.width,

            y:
                -Math.random() *
                confettiCanvas.height,

            width:
                5 +
                Math.random() *
                8,

            height:
                10 +
                Math.random() *
                12,

            speed:
                1.5 +
                Math.random() *
                4,

            angle:
                Math.random() *
                Math.PI *
                2,

            spin:
                -0.08 +
                Math.random() *
                0.16,

            drift:
                -1 +
                Math.random() *
                2,

            color:
                Math.random() > 0.5
                    ? "#ffd83d"
                    : "#fff0a6"

        });

    }


    animateConfetti();

}


function animateConfetti() {

    confettiCtx.clearRect(
        0,
        0,
        confettiCanvas.width,
        confettiCanvas.height
    );


    confetti.forEach(
        piece => {

            piece.y +=
                piece.speed;


            piece.x +=
                piece.drift;


            piece.angle +=
                piece.spin;


            if (
                piece.y >
                confettiCanvas.height +
                20
            ) {

                piece.y =
                    -20;


                piece.x =
                    Math.random() *
                    confettiCanvas.width;

            }


            confettiCtx.save();


            confettiCtx.translate(
                piece.x,
                piece.y
            );


            confettiCtx.rotate(
                piece.angle
            );


            confettiCtx.fillStyle =
                piece.color;


            confettiCtx.fillRect(
                -piece.width / 2,
                -piece.height / 2,
                piece.width,
                piece.height
            );


            confettiCtx.restore();

        }
    );


    confettiAnimation =
        requestAnimationFrame(
            animateConfetti
        );

}


function stopConfetti() {

    if (
        confettiAnimation
    ) {

        cancelAnimationFrame(
            confettiAnimation
        );

    }


    confettiCtx.clearRect(
        0,
        0,
        confettiCanvas.width,
        confettiCanvas.height
    );

}


/* ============================================================
   PARALLAX
============================================================ */

window.addEventListener(

    "scroll",

    () => {

        const scroll =
            window.scrollY;


        document
            .querySelectorAll(
                ".aurora"
            )
            .forEach(

                (
                    aurora,
                    index
                ) => {

                    const direction =
                        index % 2 === 0
                            ? 1
                            : -1;


                    aurora.style.transform =
                        `translateY(
                            ${
                                scroll *
                                0.04 *
                                direction
                            }px
                        )`;

                }

            );

    }

);