console.log(customers)
const ul = document.querySelector('ul')

customers.results.forEach((customer, index) => {
  const li = document.createElement('li')

  const img = document.createElement('img')
  img.src = customer.picture.large

  const name = document.createElement('h2')
  name.textContent = `${customer.name.first} ${customer.name.last}`

  const email = document.createElement('p')
  email.textContent = `${customer.email}`

  const address = document.createElement('address')
  const street = document.createElement('p')
  street.textContent = `${customer.location.street}`

  const city_st = document.createElement('p')
  city_st.textContent = `${customer.location.city},
  ${customer.location.state}, ${customer.location.postcode}`

  const phNum = document.createElement('p')
  phNum.textContent = `${customer.phone}`

  const ssn = document.createElement('p')
  ssn.textContent = `${customer.id.value}`

  li.appendChild(img)
  li.appendChild(name)
  li.appendChild(email)
  li.appendChild(street)
  li.appendChild(city_st)
  li.appendChild(phNum)
  li.appendChild(ssn)

  ul.appendChild(li)
})
