import { projects } from './data'

const projectsContainer = document.getElementById('projects')
const contactForm = document.getElementById('contact-form')
const sendBtn = document.querySelector('[data-send]')

function renderProjects() {
  let html = ''
  projects.forEach(item => {
    const links = `
      <a href="${item.demoURL}" class="font-bold inline-block uppercase border-b-2 border-lime hover:text-lime py-[0.625rem]" target="_blank">
        View project
      </a>
      <a href="${item.codeURL}" class="font-bold inline-block uppercase border-b-2 border-lime hover:text-lime py-[0.625rem]" target="_blank">
        View code
      </a>
    `

    html += `
      <div class="card">
        <div class="relative card-cover" tabindex="0">
          <img src="${item.image}" alt="${item.title} screenshot">
          <div class="cursor-pointer hidden desktop:flex flex-col justify-center items-center gap-12 absolute inset-0 card-cover-info bg-semi-black">
            ${links}
          </div>
        </div>
        <h3 class="uppercase text-m font-bold mt-5">${item.title}</h3>
        <ul class="flex text-light-gray gap-[1.125rem] uppercase">
          ${item.stack.map(technology => `<li>${technology}</li>`).join('')}
        </ul>
        <div class="flex mt-5 gap-[1.875rem] desktop:hidden">
          ${links}
        </div>
      </div>
    `
  })
  projectsContainer.innerHTML = html
}

function checkInputs() {
  let isValid = true

  contactForm.querySelectorAll('[data-input]').forEach(input => {
    const { value, type } = input
    const parentEl = input.parentElement
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (type === 'email' ? !value.match(emailRegex) : value.length < 2) {
      parentEl.classList.add('input-error')
      isValid = false
    } else {
      parentEl.classList.remove('input-error')
    }
  })

  return isValid
}

async function handleFormSubmit(event) {
  event.preventDefault()
  if (!checkInputs()) return
  const formData = new FormData(contactForm)

  try {
    const res = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      body: new URLSearchParams(formData)
    })
    if (!res.ok) throw new Error(res.status)
    sendBtn.disabled = true
  } catch {}
}

contactForm.addEventListener('submit', handleFormSubmit)
renderProjects()
