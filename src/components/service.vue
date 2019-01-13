<template> 
    <div class="page">
        <mt-header title="购物车">
        <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
             </router-link>

       <mt-button slot="right">编辑</mt-button>
        </mt-header>


    
    
      

         <ul >
              <li class="shoppingcar">
                    <div class="shoppingcar_t">  
                         <input type="checkbox"/>
                         <img src="../img/01.jpg" alt="" />
                         <span>亚麻布料简约休闲西装裤子服装面料棉麻纯色桌布抱枕家纺麻布</span>
                     </div>  

                     <div class="shoppingcar_b">
                            <div class="left">
                                <h3>色号：7#</h3>
                                <p>￥42.0 <span>/米  </span></p>
                            </div>
                            <div class="right">
                              <span>-</span><input type="text" value="1" step="0.1"/><span>+</span>
                            </div>              
                     </div>
            
              </li>
          </ul> 

        

        <ul class="carbottom">
            <li> <input type="checkbox" /></li>
            <li>全选</li>
            <li><h3>总价：<span>￥42.0</span></h3><p>共1种1.0米</p></li>
            <li>结算</li>
        </ul>
        
    </div>
     

</template>

<script type="text/javascript">
import "../sass/shoppingcar.scss"

    export default{
        
    }
</script>