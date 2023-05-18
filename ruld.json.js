let a ={

  
    scenes: {
      ["sceneId"]: {
        elements: {
       
          elementId: {
            adjustLength: 2,
            width: 320,
            stayTime: 9,
            duration: 8,
            volume: 1,
            trimEnd: 8,
            x: 0,
            enter: 0,
            exit: 0,
            enterDelay: 0,
            trimStart: 0,
            chheda: false,
            resize: false
          }
        },
      
        elementList: ["elementId"],
        background: {
          type: 'color',
          current: {
            id: '#ffffff'
          }
        },
        speech: {
          type: 'upload',
          data: {
            speechId: {
              text: 'Greetings from AutoVid! My name is Olivia, and I\'m pleased to share some exciting product updates. Let me show you what\'s new.\n',
              haveDelay: false,
              delay: 0,
              url: 'https://api.autogenerate.ai/media/usersound/generated/c5d5c575-5ff0-4c65-a352-031842ec9552.mp3',
              duration: 7.6,
              length: 127
            }
          },
          sound: {
            id: 1168,
            sound: 'https://api.autogenerate.ai/media/usersound/combine_generated/17d7bb1e-992c-4104-bdf3-319013d0402a.mp3',
            soundDuration: 9,
            isGenerated: true
          },
          arr: ["speechId"],
          speechTime: 9
        },
        media: {
          video: [],
          music: []
        },
        sanimation: {
          id: 8,
          name: 'Swipe Right',
          src: 'https://api.autogenerate.ai/media/newvideocreator/animations/Swipe_Right.svg',
          sample: 'https://api.autogenerate.ai/media/newvideocreator/animations/sample/swipeRight.mp4',
          category: 0,
          animationData: {
            start: {
              from: {
                opacity: 1
              },
              to: {
                opacity: 1,
                duration: 1
              }
            },
            end: {
              from: {
                opacity: 1,
                left: '-CANVAS_WIDTH'
              },
              to: {
                opacity: 1,
                left: 0,
                duration: 1
              }
            }
          },
          colors: null,
          _Type: 'sanimation',
          duration: 1,
          index: 0
        },
        haveEasyMode: true,
        mode: 0
      }
      ,
      size: {
        width: 1920,
        height: 1080,
        ratio: 1.7777777777777777,
        str_ratio: '16:9'
      },
      mode: false,
      currentScene: {
        sceneArr: [0,1,2,3,4],
        arr: [0,1,2,3,4]
      },
      colorArr: [
        '#ffffff',
        '#670a0a',
        '#0f1c2a',
        '#2877b3',
        '#f39a3e',
        '#6647ba',
        '#f9c446',
        '#000000',
        '#6a4040',
        '#5b4c80',
        '#fff',
        '#3f4026',
        '#901b52',
        '#2a568d',
        '#87e09f',
        '#63e8fa',
        '#222222',
        '#e7416a',
        '#86abfb',
        '#4895ef',
        '#7209b7',
        '#03045e',
        '#1e3343',
        '#b25f5f'
      ],
      mask: {
        type: 'mask',
        id: 15,
        name: 'Hexagon',
        src: 'https://api.autogenerate.ai/media/externalAssets/elements/M12-hexagon.svg',
        _Type: 'mask'
      },
      currentAvatar: {
        lang: {
          id: 53,
          i: 12
        },
        video: {},
        audio: {
          id: 305,
          name: 'Ava M.',
          gender: 2,
          samples: 'https://api.autogenerate.ai/media/appAssets/avatar_sounds/default.mp3',
          lang: {
            id: 13,
            name: 'English (US)',
            code: 'en-US',
            country: [
              {
                name: 'United States',
                code: 'US'
              }
            ],
            tags: null,
            image: 'https://api.autogenerate.ai/media/country/US.svg'
          }
        },
        image: {
          id: 4,
          name: 'Asian Avatar 1',
          gender: 2,
          img: 'https://api.autogenerate.ai/media/avatars/image/av1_small.jpeg',
          largeImg: 'https://api.autogenerate.ai/media/avatars/image/AV_1.jpg',
          transparentImage: 'https://api.autogenerate.ai/media/avatars/image/4_95.webp',
          avatarConfig: {
            FM: {
              ax: -13,
              ay: 128,
              scale: 0.728
            },
            FB: {
              ax: 11,
              ay: 530,
              scale: 0.408
            },
            SM: {
              ax: 94,
              ay: 274,
              x: 213,
              y: 263,
              scale: 0.717,
              size: 535,
              anX: 85,
              anY: 56,
              anSc: 0.7794392523364486
            },
            SB: {
              ax: -57,
              ay: 725,
              x: 40,
              y: 716,
              scale: 0.48,
              size: 324,
              anX: 67,
              anY: 39,
              anSc: 0.7407407407407407
            },
            faceCenterPoint: {
              x: 526,
              y: 241,
              scale: 0.874
            }
          }
        }
      },
      sanimation: {
        type: 'sanimation',
        id: 8,
        name: 'Swipe Right',
        src: 'https://api.autogenerate.ai/media/newvideocreator/animations/Swipe_Right.svg',
        sample: 'https://api.autogenerate.ai/media/newvideocreator/animations/sample/swipeRight.mp4',
        category: 0,
        animationData: {
          start: {
            from: {
              opacity: 1
            },
            to: {
              opacity: 1,
              duration: 1
            }
          },
          end: {
            from: {
              opacity: 1,
              left: '-CANVAS_WIDTH'
            },
            to: {
              opacity: 1,
              left: 0,
              duration: 1
            }
          }
        },
        colors: null,
        _Type: 'sanimation'
      }
    }
   
  }