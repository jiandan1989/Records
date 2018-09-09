<el-tag><a target="_blank" href="https://css-tricks.com/examples/ShapesOfCSS/">参考地址1: </a></el-tag>
<el-tag type="info"><a target="_blank" href="https://codepen.io/yisi/details/yymGqm/">参考地址2: </a></el-tag>

<br />
<br />
<el-tabs type="card" v-model="activeKey">
  <el-tab-pane
    :key="item.name"
    v-for="(item, index) in tabs"
    :label="item.title"
    :name="item.name"
  >
  </el-tab-pane>
</el-tabs>

<a :href="href">GO</a>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item id="#square" title="正方形" name="square">
  <<< @/docs/note/css/components/graphical/square.scss
  <div id="square"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="矩形" name="rectangle">
  <<< @/docs/note/css/components/graphical/rectangle.scss
  <div id="rectangle"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="椭圆形" name="oval">
  <<< @/docs/note/css/components/graphical/oval.scss
  <div id="oval"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="圆形" name="circle">
  <<< @/docs/note/css/components/graphical/circle.scss
  <div id="circle"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="向上三角形" name="triangleUp">
  <<< @/docs/note/css/components/graphical/triangleUp.scss
  <div id="triangleUp"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="向下" name="triangleDown">
  <<< @/docs/note/css/components/graphical/triangleDown.scss
  <div id="triangleDown"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="向左" name="triangleLeft" id="#triangleLeft">
  <<< @/docs/note/css/components/graphical/triangleLeft.scss
  <div id="triangle-left"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="向左" name="triangleRight" id="#triangleRight">
  <<< @/docs/note/css/components/graphical/triangleRight.scss
  <div id="triangle-right"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>


<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="左上" name="triangleTopLeft">
  <<< @/docs/note/css/components/graphical/triangleTopLeft.scss
  <div id="triangleTopLeft"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="右上" name="triangleTopRight">
  <<< @/docs/note/css/components/graphical/triangleTopRight.scss
  <div id="triangleTopRight"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="左下" name="triangleBottomLeft">
  <<< @/docs/note/css/components/graphical/triangleBottomLeft.scss
  <div id="triangleBottomLeft"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="右下" name="triangleBottomRight">
  <<< @/docs/note/css/components/graphical/triangleBottomRight.scss
  <div id="triangleBottomRight"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="弯尾箭头" name="curvedTailArrow">
  <<< @/docs/note/css/components/graphical/curvedTailArrow.scss
  <div id="curvedTailArrow"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="梯形" name="trapezoid">
  <<< @/docs/note/css/components/graphical/trapezoid.scss
  <div id="trapezoid"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="平行四边形" name="parallelogram">
  <<< @/docs/note/css/components/graphical/parallelogram.scss
  <div id="parallelogram"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>


<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="六角星" name="sixStar">
  <<< @/docs/note/css/components/graphical/sixStar.scss
  <div id="sixStar"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="五角星" name="fiveStar">
  <<< @/docs/note/css/components/graphical/fiveStar.scss
  <div id="fiveStar"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="五边形" name="pentagon">
  <<< @/docs/note/css/components/graphical/pentagon.scss
  <div id="pentagon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="六边形" name="hexagon">
  <<< @/docs/note/css/components/graphical/hexagon.scss
  <div id="hexagon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="八边形" name="octagon">
  <<< @/docs/note/css/components/graphical/octagon.scss
  <div id="octagon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="心形" name="heart" id="#heart">
  <<< @/docs/note/css/components/graphical/heart.scss
  <div id="heart"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="无限符图形" name="infinity">
  <<< @/docs/note/css/components/graphical/infinity.scss
  <div id="infinity"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="菱形" name="diamondSquare">
  <<< @/docs/note/css/components/graphical/diamondSquare.scss
  <div id="diamondSquare"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="钻石盾牌" name="diamondShield">
  <<< @/docs/note/css/components/graphical/diamondShield.scss
  <div id="diamondShield"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="砖石形" name="cutDiamond">
  <<< @/docs/note/css/components/graphical/cutDiamond.scss
  <div id="cutDiamond"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="鸡蛋" name="egg">
  <<< @/docs/note/css/components/graphical/egg.scss
  <div id="egg"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="吃豆人" name="pacMan">
  <<< @/docs/note/css/components/graphical/pacMan.scss
  <div id="pacman"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="聊天框" name="talkBubble">
  <<< @/docs/note/css/components/graphical/talkBubble.scss
  <div id="talkbubble"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="爆炸形状" name="pointBurst">
  <<< @/docs/note/css/components/graphical/pointBurst.scss
  <div id="pointBurst"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="阴阳八卦" name="yinYang">
  <<< @/docs/note/css/components/graphical/yinYang.scss
  <div id="yinYang"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="徽章丝带" name="badgeRibbon">
  <<< @/docs/note/css/components/graphical/badgeRibbon.scss
  <div id="badgeRibbon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="太空入侵者" name="spaceInvader">
  <<< @/docs/note/css/components/graphical/spaceInvader.scss
  <div id="spaceInvader"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="电视屏幕" name="TVScreen">
  <<< @/docs/note/css/components/graphical/TVScreen.scss
  <div id="TVScreen"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="雪佛龙" name="chevron">
  <<< @/docs/note/css/components/graphical/chevron.scss
  <div id="chevron"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="放大镜" name="MagnifyingGlass">
  <<< @/docs/note/css/components/graphical/MagnifyingGlass.scss
  <div id="MagnifyingGlass"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="Facebook图标" name="FacebookIcon" id="#FacebookIcon">
  <<< @/docs/note/css/components/graphical/FacebookIcon.scss
  <div id="FacebookIcon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="圆锥形" name="cone">
  <<< @/docs/note/css/components/graphical/cone.scss
  <div id="cone"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="月亮" name="moon">
  <<< @/docs/note/css/components/graphical/moon.scss
  <div id="moon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="十字架" name="cross">
  <<< @/docs/note/css/components/graphical/cross.scss
  <div id="cross"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="徽章" name="pointer">
  <<< @/docs/note/css/components/graphical/pointer.scss
  <div id="pointer"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<i-back-top></i-back-top>


<style lang="scss">
@import './pointer.scss';
@import './cutDiamond.scss';
@import './badgeRibbon.scss';
@import './egg.scss';
@import './TVScreen.scss';
@import './FacebookIcon.scss';
@import './cone.scss';  
@import './moon.scss';
@import './MagnifyingGlass.scss';
@import './Chevron.scss';
@import './spaceInvader.scss';
@import './pointBurst.scss';
@import './yinYang.scss';
@import './talkBubble.scss';
@import './pacMan.scss';
@import './cross.scss';
@import './diamondSquare.scss';
@import './infinity.scss';
@import './heart.scss';  
@import './square.scss';
@import './rectangle.scss';
@import './circle.scss';
@import './oval.scss';
@import './triangleUp.scss';
@import './triangleDown.scss';
@import './triangleLeft.scss';
@import './triangleRight.scss';
@import './triangleTopLeft.scss';
@import './triangleTopRight.scss';
@import './triangleBottomLeft.scss';
@import './triangleBottomRight.scss';
@import './curvedTailArrow.scss';
@import './trapezoid.scss';
@import './parallelogram.scss';
@import './sixStar.scss';
@import './fiveStar.scss';
@import './pentagon.scss';
@import './hexagon.scss';
@import './octagon.scss';
@import './diamondShield.scss';
</style> 

<script>
import graphicEnum from './index.js';
import path from 'path';
export default {
  name: 'graphical',
  data() {
    return {
      fileNames: require.context('./', false, /\.scss$/).keys(),
      activeKey: '',
      href: '',
      activeNames: [''],
    };
  },
  watch: {
    activeKey() {
      this.href = `#${this.activeKey}`;
      this.activeNames = [this.activeKey];
    }
  },
  computed: {
    fileNamePaths() {
      return this.fileNames.map(key => key.replace(/^\.\/(\S+)\.scss$/, '$1'));
    },
    tabs() {
      return this.fileNamePaths.map(key => ({
        title: `${graphicEnum[key]}`,
        name: `${key}`
      }));
    },
  }
}
</script>
