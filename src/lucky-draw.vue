<template>
  <div>
    <div>
      <h3>lucky Draw</h3>
      <ul>
        <li v-for="(index) in 9" :key="index" :class="{active: addActive(index)}">
          {{index}}
          <span></span>
        </li>
      </ul>
      <button @click="rollAgain()">点我</button>
    </div>
  </div>
</template>

<script>
// 思路： 计算走的所有格子，一圈是九个，加上获奖得index 就是他要行走的所有格子
// todo： 最后减速
export default {
  data () {
    return {
      prizeIndex: 4,
      currentIndex: 1,
      setIntervalTimer: '',
      baseCircle: 5,
      allcount: '',
      count: 1,
      timer: 50
    }
  },
  components: {
  },
  created () {
    this.allcount = this.baseCircle * 9 + this.prizeIndex
    // this.roll()
  },
  methods: {
    addActive (i) {
      if (i === this.currentIndex) {
        return true
      }
    },
    roll () {
      let that = this
      this.setIntervalTimer = setInterval(() => {
        that.count++
        if (that.count === that.allcount) {
          clearTimeout(that.setIntervalTimer)
        }
        if (this.currentIndex < 9) {
          that.currentIndex++
          // 在count 增加到一定的数值时候。增加定时器的时间，减缓转动速度
          if (that.count === this.allcount - 18) {
            clearTimeout(that.setIntervalTimer)
            that.timer = 100
            that.roll()
          }
          if (that.count === this.allcount - 9) {
            clearTimeout(that.setIntervalTimer)
            that.timer = 150
            that.roll()
          }
          if (that.count === this.allcount - 5) {
            clearTimeout(that.setIntervalTimer)
            that.timer = 200
            that.roll()
          }
          if (that.count === this.allcount - 2) {
            clearTimeout(that.setIntervalTimer)
            that.timer = 500
            that.roll()
          }
        } else {
          that.currentIndex = 1
          if (that.count === that.allcount) {
            that.count = 0
            clearTimeout(this.setIntervalTimer)
          }
        }
      }, this.timer)
    },
    rollAgain () {
      this.count = 0
      this.timer = 50
      this.currentIndex = 0
      this.roll()
    }
  }
}
</script>

<style>
    ul {
      width: 80%;
      margin: 0 auto;
    }
    li {
      display: inline-block;
      border: 1px solid #ddd;
      width: 30%;
      height: 50px;
      list-style: none;
      position: relative;
    }
    li.active span {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0%;
      background-color: rgba(0,0,0,0.5)
    }
</style>
