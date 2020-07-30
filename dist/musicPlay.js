const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,//吸底模式
  autoplay: false,//默认是否自动播放
  theme: '#FADFA3',
  loop: 'all',
  order: 'random',
  preload: 'auto',
  volume: 0.7,//默认音量
  mutex: true,//是否不允许多个播放器同时播放
  listFolded: true,//是否默认收起播放列表
  listMaxHeight: 90,//播放列表的高度
  lrcType: 3, //使用lrc文件提供歌词
//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
  audio: [
    {
        name: '如果当时',
        artist: '许嵩',
        url: 'http://music.163.com/song/media/outer/url?id=167870.mp3',
        cover: 'http://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg?param=130y130',
        lrc: '/./dist/music/lrc/rgds.lrc',
        theme: '#46718b'
    },
      {
          name: '庐州月',
          artist: '许嵩',
          url: 'http://music.163.com/song/media/outer/url?id=167850.mp3',
          cover: 'http://p1.music.126.net/3hqcQrXZ39kDCCzV7QbZjA==/34084860473122.jpg?param=130y130',
          lrc: '/./dist/music/lrc/lzy.lrc',
          theme: '#46718b'
      },
      {
          name: '初见初恋',
          artist: '孙怡',
          url: 'http://music.163.com/song/media/outer/url?id=542691161.mp3',
          cover: 'http://p2.music.126.net/9uOHLycE5Q-4XJ6grHBnFA==/109951163176817976.jpg?param=130y130',
          lrc: '/./dist/music/lrc/cjcl.lrc',
          theme: '#46718b'
      },
  {
          name: '盗将行',
          artist: '花粥 / 马雨阳',
          url: 'http://music.163.com/song/media/outer/url?id=574566207.mp3',
          cover: 'http://p1.music.126.net/5ItF4K5y7M17kzqMTOPPSg==/109951165009810657.jpg?param=130y130',
          lrc: '/./dist/music/lrc/djx.lrc',
          theme: '#46718b'
      },
  {
          name: 'Psycho (Pt. 2)',
          artist: 'Russ',
          url: 'http://music.163.com/song/media/outer/url?id=440208643.mp3',
          cover: 'http://p1.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg',
          lrc: '/./dist/music/lrc/Psycho.lrc',
          theme: '#46718b'
      },
      {
        name: '你笑起来真好看',
        artist: '李昕融 / 樊桐舟 / 李凯稠',
        url: 'http://music.163.com/song/media/outer/url?id=1368934278.mp3',
        cover: 'http://p2.music.126.net/INYRP-HGtsDzRjMsF5Z8QQ==/109951164113799784.jpg?param=130y130',
        lrc: '/./dist/music/lrc/nxqlzhk.lrc',
        theme: '#46718b'
    },
  {
          name: 'Something Just Like This',
          artist: 'The Chainsmokers / Coldplay',
          url: 'http://music.163.com/song/media/outer/url?id=461347998.mp3',
          cover: 'http://p1.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg',
          lrc: '/./dist/music/lrc/sjlt.lrc',
          theme: '#46718b'
      },
  {
          name: 'いつも何度でも',
          artist: '木村弓',
          url: 'http://music.163.com/song/media/outer/url?id=443078.mp3',
          cover: 'http://p2.music.126.net/y3X2ki7pewaOktEZtLJ87Q==/2409029976474620.jpg?param=130y130',
          lrc: '/./dist/music/lrc/cjcl.lrc',
          theme: '#46718b'
      }
     
  ]
});