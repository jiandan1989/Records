---
pageClass: custom-page
---

<el-tag><a target="_blank" href="https://css-tricks.com/examples/ShapesOfCSS/">参考地址 1: </a></el-tag>
<el-tag type="info"><a target="_blank" href="https://codepen.io/yisi/details/yymGqm/">参考地址 2: </a></el-tag>

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
  <<< @/docs/css/graphical/square.scss
  <div id="square"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="矩形" name="rectangle">
  <<< @/docs/css/graphical/rectangle.scss
  <div id="rectangle"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="椭圆形" name="oval">
  <<< @/docs/css/graphical/oval.scss
  <div id="oval"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="圆形" name="circle">
  <<< @/docs/css/graphical/circle.scss
  <div id="circle"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="向上三角形" name="triangleUp">
  <<< @/docs/css/graphical/triangleUp.scss
  <div id="triangleUp"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="向下" name="triangleDown">
  <<< @/docs/css/graphical/triangleDown.scss
  <div id="triangleDown"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="向左" name="triangleLeft" id="#triangleLeft">
  <<< @/docs/css/graphical/triangleLeft.scss
  <div id="triangle-left"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="向左" name="triangleRight" id="#triangleRight">
  <<< @/docs/css/graphical/triangleRight.scss
  <div id="triangle-right"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="左上" name="triangleTopLeft">
  <<< @/docs/css/graphical/triangleTopLeft.scss
  <div id="triangleTopLeft"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="右上" name="triangleTopRight">
  <<< @/docs/css/graphical/triangleTopRight.scss
  <div id="triangleTopRight"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="左下" name="triangleBottomLeft">
  <<< @/docs/css/graphical/triangleBottomLeft.scss
  <div id="triangleBottomLeft"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="右下" name="triangleBottomRight">
  <<< @/docs/css/graphical/triangleBottomRight.scss
  <div id="triangleBottomRight"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="弯尾箭头" name="curvedTailArrow">
  <<< @/docs/css/graphical/curvedTailArrow.scss
  <div id="curvedTailArrow"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="梯形" name="trapezoid">
  <<< @/docs/css/graphical/trapezoid.scss
  <div id="trapezoid"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="平行四边形" name="parallelogram">
  <<< @/docs/css/graphical/parallelogram.scss
  <div id="parallelogram"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="六角星" name="sixStar">
  <<< @/docs/css/graphical/sixStar.scss
  <div id="sixStar"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="五角星" name="fiveStar">
  <<< @/docs/css/graphical/fiveStar.scss
  <div id="fiveStar"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="五边形" name="pentagon">
  <<< @/docs/css/graphical/pentagon.scss
  <div id="pentagon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="六边形" name="hexagon">
  <<< @/docs/css/graphical/hexagon.scss
  <div id="hexagon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="八边形" name="octagon">
  <<< @/docs/css/graphical/octagon.scss
  <div id="octagon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="心形" name="heart" id="#heart">
  <<< @/docs/css/graphical/heart.scss
  <div id="heart"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="无限符图形" name="infinity">
  <<< @/docs/css/graphical/infinity.scss
  <div id="infinity"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="菱形" name="diamondSquare">
  <<< @/docs/css/graphical/diamondSquare.scss
  <div id="diamondSquare"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="钻石盾牌" name="diamondShield">
  <<< @/docs/css/graphical/diamondShield.scss
  <div id="diamondShield"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="砖石形" name="cutDiamond">
  <<< @/docs/css/graphical/cutDiamond.scss
  <div id="cutDiamond"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="鸡蛋" name="egg">
  <<< @/docs/css/graphical/egg.scss
  <div id="egg"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="吃豆人" name="pacMan">
  <<< @/docs/css/graphical/pacMan.scss
  <div id="pacman"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="聊天框" name="talkBubble">
  <<< @/docs/css/graphical/talkBubble.scss
  <div id="talkbubble"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="爆炸形状" name="pointBurst">
  <<< @/docs/css/graphical/pointBurst.scss
  <div id="pointBurst"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="阴阳八卦" name="yinYang">
  <<< @/docs/css/graphical/yinYang.scss
  <div id="yinYang"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="徽章丝带" name="badgeRibbon">
  <<< @/docs/css/graphical/badgeRibbon.scss
  <div id="badgeRibbon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="太空入侵者" name="spaceInvader">
  <<< @/docs/css/graphical/spaceInvader.scss
  <div id="spaceInvader"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="电视屏幕" name="TVScreen">
  <<< @/docs/css/graphical/TVScreen.scss
  <div id="TVScreen"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="雪佛龙" name="chevron">
  <<< @/docs/css/graphical/chevron.scss
  <div id="chevron"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="放大镜" name="MagnifyingGlass">
  <<< @/docs/css/graphical/MagnifyingGlass.scss
  <div id="MagnifyingGlass"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="Facebook图标" name="FacebookIcon" id="#FacebookIcon">
  <<< @/docs/css/graphical/FacebookIcon.scss
  <div id="FacebookIcon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="圆锥形" name="cone">
  <<< @/docs/css/graphical/cone.scss
  <div id="cone"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="月亮" name="moon">
  <<< @/docs/css/graphical/moon.scss
  <div id="moon"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="十字架" name="cross">
  <<< @/docs/css/graphical/cross.scss
  <div id="cross"></div>
  <div><a href="#">回到顶部</a></div>
  </el-collapse-item>
</el-collapse>

<el-collapse accordion v-model="activeNames">
  <el-collapse-item title="徽章" name="pointer">
  <<< @/docs/css/graphical/pointer.scss
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
