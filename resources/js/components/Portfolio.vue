<template>
    <div>
<div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
    </div>
    <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#">Portfo<span>lio.</span></a></div>
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Pradzia</a></li>
                <li><a href="#about" class="menu-btn">Apie</a></li>
                <li><a href="#skills" class="menu-btn">Skills</a></li>
                <li><a href="#contact" class="menu-btn">Kontaktai</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
      <!-- home section start -->
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Sveiki , mano vardas yra</div>
                <div class="text-2"><span class="typing"></span></div>
                <div class="text-3"><span>vidutinis įvertinimąs: {{ allData.average }}<i class="fas fa-star"></i>, max-10</span></div>
                <div class="text-3"><span>vertino: {{ allData.total }}</span></div>
                <!-- <div class="text-3">And I'm a <span class="typing"></span></div> -->
            </div>
        </div>
    </section>
     <!-- about section start -->
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">Apie</h2>
            <div class="about-content">
                <div class="column left">
                    <img :src="getImage1()" alt="">
                </div>
                <div class="column right">
                    <p>Baigiau Kauno informacinių technologijų mokykla , web-developer profesija ,taip pat atlikau trijų mėnesių praktika
Erasmus+, labiausiai sudomino back-end dalis ,laravel karkasu ir Vue.js front, todėl norėčiau toliau su ja tobulėti. Esu energingas žmogus su atsakingu
požiūriu , todėl nebijočiau jokių užduočių.</p>
                </div>
            </div>
        </div>
    </section>
  
        <!-- skills section start -->
    <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">Atlikti darbai</div>
                    <p><a href="//github.com/Lost2257">Github</a><span class="typing-2"></span></p>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span class="pagrindai"></span>
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span class="pagrindai2"></span>
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span class="pagrindai3"></span>
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>PHP</span>
                            <span class="pagrindai4"></span>
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span class="pagrindai5"></span>
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>GIT</span>
                            <span class="pagrindai6"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <!-- contact section start -->
    <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Kontaktai</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Vardas</div>
                                <div class="sub-title">Aivaras Razvodovskis</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">El.paštas</div>
                                <div class="sub-title">aivaras735@gmail.com</div>
                            </div>
                        </div>

                        <div class="row">
                            <i class="fas fa-star"></i>
                            <div class="info">
                                <div class="head">Taip pat , galite palikti įvertinimą</div>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                     Spauskite čia
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog-centered modal-dialog">
                        <div class="modal-content">
                          <stars class="mt-3"></stars>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Uzdaryti</button>
                          </div>
                        </div>
                      </div>
                  </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="column right">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2300.6447586678723!2d24.677223050658224!3d54.786211273491325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e766df8191e87f%3A0xf8cbabf82b90c9a2!2sPergal%C4%97s%20g.%2043%2C%20Elektr%C4%97nai%2026125!5e0!3m2!1slt!2slt!4v1638891952468!5m2!1slt!2slt" width="100% " height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>
    <!-- footer section start -->

    </div>
</template>

<script>
export default{
  data(){
    return{
      allData: '',
      average: '',
    }
  },
  methods: {
    getImage1(){
      return 'img/aivaras.jpg'
    },
  },
  mounted() {
    axios.get('/api/count')
    .then(response => this.allData = response.data)
  },
}
</script>
