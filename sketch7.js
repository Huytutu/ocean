const messages = [
  'Cậu chắc chưa?',
  'Chắc thật không đó??',
  'Cậu chắc chắn luôn hả?',
  'Làm ơn mà, tớ năn nỉ đó…',
  'Nghĩ lại thêm chút nữa nha!',
  'Nếu cậu nói không, tớ sẽ buồn lắm đó…',
  'Tớ sẽ buồn thật sự luôn…',
  'Tớ sẽ buồn rất rất rất nhiều luôn…',
  'Thôi được rồi, tớ không hỏi nữa đâu…',
  'Đùa thôi, nói đồng ý nha!'
];

let messageIndex = 0;

function buildValentineSection() {
  const section = document.getElementById('section7');
  if (!section) return;

  const container = document.createElement('div');
  container.className = 'valentine-container';

  const card = document.createElement('div');
  card.className = 'valentine-card';

  const question = document.createElement('div');
  question.className = 'valentine-question';

  const title = document.createElement('h1');
  title.className = 'valentine-title';
  title.textContent = 'Cho tớ xin phép tìm hiểu cậu một cách nghiêm túc nhé';

  const buttons = document.createElement('div');
  buttons.className = 'valentine-buttons';

  const yesButton = document.createElement('button');
  yesButton.className = 'valentine-button yes';
  yesButton.textContent = 'Đồng ý';

  const noButton = document.createElement('button');
  noButton.className = 'valentine-button no';
  noButton.textContent = 'No';

  const gifContainer = document.createElement('div');
  gifContainer.className = 'valentine-gif';

  const gif = document.createElement('img');
  gif.src = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif';
  gif.alt = 'Cute GIF';

  const yesPane = document.createElement('div');
  yesPane.className = 'valentine-yes';

  const yesTitle = document.createElement('h1');
  yesTitle.className = 'valentine-title';
  yesTitle.textContent = 'Tớ biết cậu sẽ đồng ý mà =)';

  const yesGifContainer = document.createElement('div');
  yesGifContainer.className = 'valentine-gif';

  const yesGif = document.createElement('img');
  yesGif.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6NHhhaDE2Mjg1ZjkwOXczdDFxbWM3dTBtaW9zaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif';
  yesGif.alt = 'Celebration GIF';

  yesGifContainer.appendChild(yesGif);
  yesPane.appendChild(yesTitle);
  yesPane.appendChild(yesGifContainer);

  buttons.appendChild(yesButton);
  buttons.appendChild(noButton);

  gifContainer.appendChild(gif);

  question.appendChild(title);
  question.appendChild(buttons);
  question.appendChild(gifContainer);

  card.appendChild(question);
  card.appendChild(yesPane);
  container.appendChild(card);
  section.appendChild(container);

  noButton.addEventListener('click', () => {
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${Math.min(currentSize * 1.3, 72)}px`;
  });

  yesButton.addEventListener('click', () => {
    question.classList.add('hidden');
    yesPane.classList.add('active');
  });
}

window.addEventListener('DOMContentLoaded', buildValentineSection);
