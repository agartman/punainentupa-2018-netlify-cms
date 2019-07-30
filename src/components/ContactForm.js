import React from 'react'
import '../css/contact.scss'
import Button from '../components/Button'

const finnishButtonTexts = {
  sendButton: 'Lähetä',
  sending: 'Lähetetään...',
  thanks: 'Kiitti. Vastaan pian viestiisi.',
  placeholderName: 'Nimi',
  placeholderEmail: 'Sähköpostiosoite',
  placeholderMessage: 'Viesti',
  errorOccured: 'Hups, jotain hassua tapahtui.',
  done: 'Viesti lähti liikkeelle.',
}
const englishButtonTexts = {
  sendButton: 'Send',
  sending: 'Sending...',
  thanks: "Thanks. I'll get back to you ASAP.",
  placeholderName: 'Name',
  placeholderEmail: 'E-mail',
  placeholderMessage: 'Message',
  errorOccured: 'Error occured, oops.',
  done: 'Done.',
}

export default class ContactForm extends React.Component {
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  texts() {
    return this.props.language === 'fi'
      ? finnishButtonTexts
      : englishButtonTexts
  }

  constructor(params) {
    super(params)
    this.state = {
      loading: false,
      loaded: false,
      email: '',
      buttonText: this.texts().sendButton,
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = e => {
    this.setState({
      loading: true,
      buttonText: this.texts().sending,
      contactEmail: '',
      contactMessage: '',
      contactName: '',
    })
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': 'contact',
        email: this.state.contactEmail,
        name: this.state.contactName,
        message: this.state.contactMessage,
      }),
    })
      .then(() => {
        this.setState({
          loading: false,
          loaded: true,
          title: this.texts().thanks,
          buttonText: this.texts().done,
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          loading: false,
          loaded: true,
          buttonText: this.texts().errorOccured,
        })
      })
  }

  handleChangeMessage(event) {
    this.setState({ loaded: false, contactMessage: event.target.value })
  }

  handleChangeName(event) {
    this.setState({ loaded: false, contactName: event.target.value })
  }

  handleChangeEmail(event) {
    this.setState({ loaded: false, contactEmail: event.target.value })
  }

  render() {
    const texts = this.texts()
    return (
      <div className={this.props.className}>
        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <input
                onChange={this.handleChangeName}
                required="required"
                id="name"
                value={this.state.contactName}
                type="text"
                name="name"
                placeholder={texts.placeholderName}
              />
            </div>
            <div>
              <input
                onChange={this.handleChangeEmail}
                required="required"
                id="email"
                value={this.state.contactEmail}
                type="email"
                name="email"
                placeholder={texts.placeholderEmail}
              />
            </div>
            <div>
              <textarea
                onChange={this.handleChangeMessage}
                value={this.state.contactMessage}
                id="message"
                name="message"
                type="text"
                placeholder={texts.placeholderMessage}
              />
            </div>
            <div>
              <Button title={texts.sendButton} type="submit" />
            </div>
            {this.state.loaded && <h2>{texts.thanks}</h2>}
          </div>
        </form>
      </div>
    )
  }
}
