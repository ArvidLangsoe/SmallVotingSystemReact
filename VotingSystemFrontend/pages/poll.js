import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Router from 'next/router';


class Poll extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      voteOption: '',
      pollId: '',
      poll: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      voteOption: this.props.poll.options[0],
      pollId: this.props.poll.id,
      poll: this.props.poll
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.pollId = this.state.poll.id;
    axios.post('http://localhost:44310/api/vote/' + this.state.poll.id, this.state)
      .then(res => {
        console.log(res)
        this.setState({ poll: res.data })
      })
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their corresponding values in state, it's super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Layout>
          {this.state.poll != undefined &&
          <div>
            <h1>{this.state.poll.title}</h1>
            <p>{this.state.poll.description}</p>

            <div className="vote-result">
              {this.state.poll.voteCounts.map(voteCount =>
                <div className="vote-option-result">
                  <h5>{voteCount.option}</h5>
                  <ProgressBar now={voteCount.count * 100 / this.state.poll.totalVotes} label={`${voteCount.count}`} />
                </div>
              )}
            </div>

            <Form onSubmit={this.handleSubmit}>
              <div className="vote-box">
                <div>
                  <h4>Vote now!</h4>

                  <Form.Group controlId="name">
                    <Form.Label>Your name:</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="id" onChange={this.onChange} />
                  </Form.Group>

                  <Form.Group controlId="voteOption">
                    <Form.Label>Option</Form.Label>
                    <Form.Control as="select" name="voteOption" onChange={this.onChange}>
                      {this.state.poll.options.map(option =>
                        <option value={option}>{option}</option>
                      )}
                    </Form.Control>
                  </Form.Group>
                </div>

                <Button variant="primary" type="submit">Vote!</Button>
              </div>
            </Form>
            </div>
          }


        <style jsx>{`
          .vote-box {
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            max-width: 400px;
            border: 2px solid #ddd;
            border-radius: 10px;
            padding: 10px;
          }
          .vote-result {
            max-width: 500px;
            margin-bottom: 20px;
          }

          .vote-option-result{
            margin-bottom: 10px;
          }

    `}
        </style>
      </Layout>
    )
  }
}

Poll.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:44310/api/poll/${id}`)
  const poll = await res.json()

  console.log(`Fetched show: ${poll.title}`)

  return { poll }
}

export default Poll