<template>

    <div>
        <div class="wrapper">
    <div class="container">
        
        <div class="left">
            <div class="top">
                <input type="text" placeholder="Search" />
                <a href="javascript:;" class="search"></a>
            </div>
            <ul class="people">
                <li @click="myFunctionClick('person1')"  class="person" data-chat="person1">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
                    <span class="name">Thomas Bangalter</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">I was wondering...</span>
                </li>
                <li @click="myFunctionClick('person2')" class="person" data-chat="person2">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png" alt="" />
                    <span class="name">Dog Woofson</span>
                    <span class="time">1:44 PM</span>
                    <span class="preview">I've forgotten how it felt before</span>
                </li>
                <li @click="myFunctionClick('person3')" class="person" data-chat="person3">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg" alt="" />
                    <span class="name">Louis CK</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">But we’re probably gonna need a new carpet.</span>
                </li>
                <li @click="myFunctionClick('person4')" class="person" data-chat="person4">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt="" />
                    <span class="name">Bo Jackson</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">It’s not that bad...</span>
                </li>
                <li @click="myFunctionClick('person5')" class="person" data-chat="person5">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/michael-jordan.jpg" alt="" />
                    <span class="name">Michael Jordan</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">Wasup for the third time like is 
you blind bitch</span>
                </li>
                <li @click="myFunctionClick('person6')" class="person" data-chat="person6">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/drake.jpg" alt="" />
                    <span class="name">Drake</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">howdoyoudoaspace</span>
                </li>
            </ul>
        </div>
        <div class="right">
            <Chat />
        </div>
        
    </div>
</div>

    </div>
</template>

<script>
import Chat from '@/Jetstream/Chat-Data'
export default {
    
    components: {
            Chat,
        },
    
        
      methods:{
        
        myFunctionClick: function (perona) { 
            const sentencia1 = '.chat[data-chat='+perona+']';   
            const sentencia2 = '.person[data-cha'+perona+']';
            this.$el.querySelector(sentencia1).classList.add("active-chat");
            this.$el.querySelector(sentencia2).classList.add("active");
  
  
 
        },
        
        },
    setup () {
        

        return {}
    }
    
}
</script>



<style>
@import '@/css/style.scss';
</style>