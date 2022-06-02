// Import stylesheets
import './style.css';

// 0. Import LIFF SDK
import liff from '@line/liff';

// Body element
const body = document.getElementById('body');

// Profile elements
const pictureUrl = document.getElementById('pictureUrl');
const userId = document.getElementById('userId');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
const email = document.getElementById('email');

var imgNext = document.getElementById('imgNext');
var imgPrev = document.getElementById('imgPrev');

// Button elements
const btnShare = document.getElementById('btnShare');

async function main() {
  // 2. liff.ready
  liff.ready.then(() => {
    if (liff.getOS() === 'android') {
      body.style.backgroundColor = '#888888';
    }
    if (liff.isInClient()) {
      getUserProfile();
    }
    btnShare.style.display = 'block';
  });
  // 3. Try a LIFF function
  // 4. Check where LIFF was opened
  // 5. Call getUserProfile()
  // 10. Show share button

  // 1. Initialize LIFF app)
  await liff.init({ liffId: '1657145167-Moo7gjpB' });
}
main();

// 6. Create getUserProfile()
// *7. Get email
async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>userId: </b>' + profile.userId;
  displayName.innerHTML = '<b>displayName: </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>statusMessage: </b>' + profile.statusMessage;
  email.innerHTML = '<b>email: </b>' + liff.getDecodedIDToken().email;
}

// *8. Create shareMsg()
async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type: 'flex',
      altText: 'test!!',
      contents: {
        /* เริ่มต้น code */ type: 'carousel',
        contents: [
          {
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
              size: 'full',
              aspectRatio: '20:13',
              aspectMode: 'cover',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Arm Chair, White',
                  weight: 'bold',
                  size: 'xl',
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '$49',
                      weight: 'bold',
                      size: 'xl',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                    {
                      type: 'text',
                      text: '.99',
                      weight: 'bold',
                      size: 'sm',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Add to Cart',
                    uri: 'https://linecorp.com',
                  },
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Add to wishlist',
                    uri: 'https://linecorp.com',
                  },
                },
              ],
            },
          },
          {
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png',
              size: 'full',
              aspectRatio: '20:13',
              aspectMode: 'cover',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Metal Desk Lamp',
                  weight: 'bold',
                  size: 'xl',
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  flex: 1,
                  contents: [
                    {
                      type: 'text',
                      text: '$11',
                      weight: 'bold',
                      size: 'xl',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                    {
                      type: 'text',
                      text: '.99',
                      weight: 'bold',
                      size: 'sm',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'Temporarily out of stock',
                  size: 'xxs',
                  color: '#FF5551',
                  flex: 0,
                  margin: 'md',
                  wrap: true,
                  contents: [],
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Add to Cart',
                    uri: 'https://linecorp.com',
                  },
                  flex: 2,
                  color: '#AAAAAA',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Add to wish list',
                    uri: 'https://linecorp.com',
                  },
                },
              ],
            },
          },
          {
            type: 'bubble',
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'See more',
                    uri: 'https://linecorp.com',
                  },
                  flex: 1,
                  gravity: 'center',
                },
              ],
            },
          },
        ],
      },
    },
  ]);
  if (result) {
    alert('Msg was shared!');
  } else {
    alert('ShareTargetPicker was cancelled by user');
  }
  liff.closeWindow();
}
// 11. Add close window


var slideIndex = 1;
showSlides(slideIndex);

async function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
// 9. Add event listener to share button
btnShare.onclick = () => {
  shareMsg();
};

async function funcNext(n) {
  showSlides((slideIndex += 1));
}
async function funcPrev(n) {
  showSlides((slideIndex += -1));
}
imgPrev.onclick = () => {
  funcPrev(-1);
};
imgNext.onclick = () => {
  funcNext(1);
};
