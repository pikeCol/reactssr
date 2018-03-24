// var mint = require('../js/mint.js')
var vm = new Vue({
  el: '#bindCard',
  data: {
    telephone: '',
    url: {}
  },
  mounted: function() {
    this.url = this.queryUrl()
    // var api = widget.getApi();

    // cardid
  },
  methods: {
    openCoupon: function(cardId, code) {
      wx.ready(function() {
        wx.openCard({
          cardList: [
            {
              cardId: cardId,
              code: code
            }
          ], // 需要添加的卡券列表
          success: function(res) {
            alert(res.cardList);
            var cardList = res.cardList; // 添加的卡券列表信息
          },
          cancel: function(res) {
            alert(res);
          },
          fail: function(res) {
            alert(res);
          }
        });
      })
    },
    queryUrl: function() {
      var query = {};
      var url = window.location.search;
      var queryStr = url.slice(1);
      var queryArr = queryStr.split('&');
      for (key of queryArr) {
        query[key.split('=')[0]] = key.split('=')[1]
      }
      return query
    }
    check: function() {
      var reg = /^1[34578]\d{9}$/;
      if (!reg.test(this.telephone)) {
        this.$toast({message: '请输入正确的电话号码', position: 'middle', duration: 4000})
      } else {
				this.jump()
			}
    },
    jump: function() {
			var url = this.url.openId
      axios.post({url: url, data: {
				telephone:this.telephone,
				openId:this.url.openId
			}}).then(function(res) {
        if (res.data.retcode === 'ok') {}
      })
    }
  }
})
