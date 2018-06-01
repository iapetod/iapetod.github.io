/*
Author: Jesus Marcano
Author URI: https://iapeto.com
Description: CV
Version: 1.0
Tags: cv, curriculum vitae, hoja de vida
*/

Vue.component('app-header',{
    template:`
    <section class="hero is-primary is-medium">
        <div class="hero-head">
            <header class="nav">
                <div class="container">
                    <div class="nav-left">
                        <a href="#" class="nav-item">
                            <span class="icon button is-inverted"></span>
                            <span class="icon button is-info"></span>
                            <span class="icon button is-success"></span>
                        </a>
                    </div>
                    <div class="nav-right nav-menu">
                        <a href="portfolio.html" class="nav-item" target="_blank">Portafolio</a>
                        <span class="nav-item">
                           <a href="http://youtube.com" class="button is-inverted">
                               <span class="icon">
                                   <i class="fa fa-github"></i>
                               </span>
                               <span>Github</span>
                           </a>
                        </span>
                    </div>
                </div>
            </header>
        </div>
    </section>
    `
})
Vue.component('app-skills',{
    template:`
    <div>
      <span v-for="skill in skills">
         {{ skill.name }} |
      </span>
    </div>
    `,
    created:function(){
        const vm = this;
    },
    methods:{
    },
    data:function(){
        return {
          skills:[
            {name:"Android",icon:"assets/img/android.png"},
            {name:"Java",icon:"assets/img/java.png"},
            {name:"JSON",icon:"assets/img/json.png"},
            {name:"HTML5",icon:"assets/img/html5.png"},
            {name:"Javascript",icon:"assets/img/javascript.png"},
            {name:"PHP",icon:"assets/img/php.png"},
            {name:"C++",icon:"assets/img/cpp.png"},
            {name:"Python",icon:"assets/img/python.png"},
            {name:"Node.js",icon:"assets/img/nodejs.png"},
            {name:"Apache",icon:"assets/img/apache.png"},
            {name:"MongoDB",icon:"assets/img/mongodb.png"},
            {name:"Laravel",icon:"assets/img/laravel.png"},
            {name:"Wordpress",icon:"assets/img/wordpress.png"},
            {name:"Linux",icon:"assets/img/linux.png"},
            {name:"Arduino",icon:"assets/img/arduino.png"},
            {name:"jQuery",icon:"assets/img/jquery.png"},
            {name:"XML",icon:"assets/img/xml.png"},
            {name:"Github",icon:"assets/img/github.png"},
            {name:"MySQL",icon:"assets/img/mysql.png"},
            {name:"Google API",icon:"assets/img/google.png"},
            {name:"Phaser.js",icon:"assets/img/phaserjs.png"},
            {name:"C#",icon:"assets/img/csharp.png"},
            {name:"Unity",icon:"assets/img/unity.png"},
            {name:"Moodle",icon:"assets/img/moodle.png"}
          ],
        }
    }
})
Vue.component('app-experience',{
    template:`
    <div>
      <ul>
        <li v-for="experience in experiences">
          <h1 class="title is-5">{{ experience.name }}</h1>
          <h2 class="subtitle is-6"> <span v-if="experience.company!=''">{{ experience.company }} - </span>{{ experience.years }} años</h2>
        </li>
      </ul>
    </div>
    `,
    created:function(){
        const vm = this;
    },
    methods:{
    },
    data:function(){
        return {
          experiences:[
            {name:"Programador de sistemas",company:"Universidad del Zulia",date:"",years:"6",projects:"5"},
            {name:"Freelancer",company:"",years:"12",projects:"6"},
          ],
        }
    }
})
Vue.component('app-ides',{
    template:`
    <div>
      <ul>
        <li v-for="ide in this.$parent.ide">
          <a :href="ide.url">{{ ide.name }}</a>
        </li>
      </ul>
    </div>
    `,
    created:function(){
        const vm = this;
    },
    methods:{
    },
    data:function(){
        return {
        }
    }
})
Vue.component('app-demos',{
    template:`
    <div>
      <ul>
        <li v-for="ide in demos">
          <a href="#" v-on:click.prevent="action(ide.url)" class="button is-dark" style="display:block;margin:4px">
          {{ ide.name }}
          </a>
        </li>
      </ul>
    </div>
    `,
    created:function(){
        const vm = this;
    },
    methods:{
      action:function(url){
        alert(url)
      }
    },
    data:function(){
        return {
          demos:[
            {name:"Android Native",url:"https://iapeto.com/downloads/demo/android"},
            {name:"iOS Native",url:"https://iapeto.com/downloads/demo/ios"},
            {name:"Hybrid App",url:"https://iapeto.com/downloads/demo/ionic"},
            {name:"Dashboard Web",url:"https://iapeto.com/downloads/demo/web"},
            {name:"Template Wordpress",url:"https://iapeto.com/downloads/demo/wordpress"}
          ],
        }
    }
})
Vue.component('app-knowledge',{
    template:`
    <div>
     <ul>
       <li v-for="knowledge in knowledges" class="skill-list">
         <div class="columns">
          <div class="column">{{ knowledge.name }}
          <div style="font-size:10px">{{ knowledge.level }}/10</div>
          </div>
          <div class="column">
            <span v-for="lev in knowledge.level" class="skill-item">
             <i class="fa fa-square-o"></i>
            </span>
          </div>
         </div>
       </li>
     </ul>
    </div>
    `,
    created:function(){
        const vm = this;
    },
    methods:{
    },
    data:function(){
        return {
          knowledges:[
              {name:"Android",level:5},
              {name:"JSON",level:9},
              {name:"HTML5",level:9},
              {name:"Javascript",level:9},
              {name:"PHP",level:8},
              {name:"Python",level:6},
              {name:"Node.js",level:6},
              {name:"Apache",level:7},
              {name:"MongoDB",level:5},
              {name:"Laravel",level:7},
              {name:"Wordpress",level:6},
              {name:"Linux",level:9},
              {name:"Arduino",level:8},
              {name:"jQuery",level:9},
              {name:"XML",level:6},
              {name:"Github",level:4},
              {name:"MySQL",level:6},
              {name:"Google API",level:5},
              {name:"Phaser.js",level:7},
              {name:"Unity",level:3},
              {name:"Moodle",level:4},
          ],
        }
    }
})
Vue.component('app-languages',{
    template:`
    <div>
     <span v-for="lang in languages">
         {{ lang.name }}/
     </span>
    </div>
    `,
    created:function(){
        const vm = this;
    },
    methods:{
    },
    data:function(){
        return {
          languages:[
            {name:"Java",level:3},
            {name:"JSON",level:3},
            {name:"HTML5",level:3},
            {name:"Javascript",level:3},
            {name:"PHP",level:3},
            {name:"C++",level:3},
            {name:"Python",level:3},
            {name:"XML",level:3},
            {name:"SQL",level:3},
            {name:"C#",level:3},
          ],
        }
    }
})
Vue.component('app-frameworks',{
    template:`
    <div>
     <p v-for="lang in this.$parent.frameworks">
         <a :href="lang.url">{{ lang.name }}</a>
     </p>
    </div>
    `,
    created:function(){
        const vm = this;
    },
    methods:{
    },
    data(){
      return {
      }
    }
})
Vue.component('app-jobs',{
    template:`
    <div>
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
          </p>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
      <div class="box" v-for="job in jobs">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ job.name }}</strong> <small>{{ job.date }}</small>
                <br>
                {{ job.description }}
                <div>
                 <span v-for="tag in job.tags"> {{ tag }} </span>
                </div>
              </p>
            </div>
          </div>
        </article>
        </div>
      </div>
    </div>
    `,
    created:function(){
        const vm = this;
        /*axios.get('http://freegeoip.net/json/').then(response =>{
            vm.title=response.data
            vm.works=[
                {url:"A",name:"B",img:"C"}
            ]
        })*/
    },
    methods:{

    },
    data:function(){
        return {
          jobs:[
            {name:"MaryPastel",url:"http://marypastel.com.ve",client:"",date:"2017",description:"Development Site, Shopping Cart and shopping and recipes system",tags:["Android","iOS","Laravel","Javascript","HTML","DomPDF"]},
            {name:"Staiger App",url:"",client:"https://play.google.com/store/apps/details?id=com.appmobile.staigerappsn",client:"Real State App",date:"2017",description:"",tags:["Android","iOS"]},
            {name:"Maintenance System",url:"",client:"",date:"2017",description:"Maintenance system for monitoring and repair of devices",tags:["Laravel","HTML","Javascript","Vue.js","Bootstrap"]},
            {name:"iDrink",url:"",client:"",date:"2015",description:"App for the search of local nightclubs, promotions and reservations",tags:["Android"]},
            {name:"Car simulator",url:"",client:"",date:"2014",description:"Formula car simulator to test a set of vehicle mobility equations",tags:["Panda3D","Game"]},
            {name:"Braile Printer",url:"",client:"",date:"2013",description:"HID driver to control a braille printer",tags:["Python","C"]},
            {name:"Extract data web",url:"",client:"",date:"2012",description:"",tags:["Python"]},
            {name:"Electromagnetic Interferences Analyzer",url:"",client:"",date:"2012",description:"Software for the spatial analysis of electromagnetic interferences",tags:["Matlab"]},
            {name:"Scripts",url:"",client:"",date:"2008 - 2017",description:"",tags:["Multiples languages"]},
            {name:"Wordpress templates (Backend)",url:"",client:"",date:"2008 - 2017",description:"",tags:["PHP","HTML5","Javascript"]},
            {name:"Wordpress Admin Panel",url:"",client:"",date:"2008 - 2017",description:"",tags:["PHP","HTML5","Javascript","Wordpress"]},
          ]
        }
    }
})
Vue.component('app-portfolio',{
    template:`
    <div>
      <div v-for="project in portfolio">A</div>
    </div>
    `,
    created:function(){
        const vm = this;
        /*axios.get('http://freegeoip.net/json/').then(response =>{
            vm.title=response.data
            vm.works=[
                {url:"A",name:"B",img:"C"}
            ]
        })*/
    },
    methods:{

    },
    data:function(){
        return {
          portfolio:["","",""]
        }
    }
})
Vue.component('app-github',{
    template:`
    <div>
      <div v-for="project in projects" v-if="project.name!='iapetod.github.io'">
        <a v-bind:href="project.html_url">{{ project.name }}</a>
      </div>
    </div>
    `,
    created:function(){
        const vm = this;
        axios.get('https://api.github.com/users/iapetod/repos').then(response =>{
            vm.projects = (response.data)
        })
    },
    methods:{

    },
    data:function(){
        return {
            projects:[]
        }
    }
})

/*const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/es', component: Foo },
  { path: '/en', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')*/


new Vue({
    el:"#app",
    data:{
        header:{
            name:"Jesus Marcano",
            country:"Venezuela",
            developer:["Android","iOS","Web","Desktop"],
            jobs:[
              "Hybrid System Developer",
              "Android Developer",
              "iOS Developer",
              "Web Developer"
            ]
        },
        lang:{
          native:"es",
          human:[
            "es",
            "en"
          ],
          programming:[
            "Java",
            "Kotlin",
            "Swift",
            "PHP",
            "HTML5",
            "Javascript",
            "Python",
            "C++",
            "C#",
            "C",
          ]
        },
        frameworks:[
          {name:"Laravel",url:"https://laravel.com/",level:3},
          {name:"Slim",url:"https://www.slimframework.com/"},
          {name:"Ionic",url:"https://ionicframework.com/"},
          {name:"React Native",url:"https://facebook.github.io/react-native/"},
          {name:"Monaca",url:"https://monaca.io/"},
          {name:"Xamarin",url:"https://www.xamarin.com/"},
          {name:"Zend",url:"http://www.zend.com/"},
          {name:"Bulma",url:"https://bulma.io/"},
          {name:"Bootstrap",url:"https://getbootstrap.com/"}
        ],
        portfolio:{
          android:[],
          web:[],
          ios:[],
          tech:[]
        },
        ide:[
          {name:"Android Studio",url:"https://developer.android.com/studio/"},
          {name:"XCode",url:"https://developer.apple.com/xcode/"},
          {name:"Visual Studio",url:"https://www.visualstudio.com/es/"}
        ],
        experience:[
          {name:"Staiger App",date:"2017",description:"Inmobiliaria",tags:["Android","iOS"]}
        ],
        sidebar:{
          hello:"Hola Visitante",
          subscribe:"No olvides suscribirte y recibir informacion",
          greetings:"Gracias por visitar",
          portfolio:["Android","iOS","Web"]
        }
    },
    created:function(){
        this.location();
    },
    methods:{
        togglelang(){
          if(this.lang.native=="es"){
            this.lang.native="en"
          }
          else{
            this.lang.native="es"
          }
        },
        language(lang){
          this.lang.native=lang
        },
        budget(event){
            if(this.request.page==0){
                this.request.page++;
            }
            else{
                const vm =this;
                /*axios.get('http://freegeoip.net/json/').then(response =>{
                    this.request.value=1000+vm.currency
                }).catch(function(error){
                    alert(error)
                })*/

            }
        },
        location(){
            const vm = this;
            /*axios.get('http://freegeoip.net/json/').then(response =>{
                vm.country=response.data.country_code.toLowerCase();
                vm.currency=(response.data.country_code=='VE')?'BsF':'$';
            }).catch(function(error){
                alert(error)
            })*/
        }
    }
})
