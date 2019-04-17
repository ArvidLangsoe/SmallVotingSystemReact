import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';



const Poll = props => (
  <Layout>
    <h1>{props.poll.title}</h1>
    <p>{props.poll.description}</p>

    <div className="vote-result">
      {props.poll.voteCounts.map(voteCount =>
        <div className="vote-option-result">
          <h5>{voteCount.option}</h5>
          <ProgressBar now={voteCount.count * 100 / props.poll.totalVotes} label={`${voteCount.count}`} />
        </div>
      )}
    </div>

    <Form>
      <form >
      <div className="vote-box">
        <div>
          <h4>Vote now!</h4>

          <Form.Group controlId="name">
            <Form.Label>Your name:</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="voteOption">
            <Form.Label>Option</Form.Label>
            <Form.Control as="select">
                {props.poll.options.map(option =>
                  <option value={option}>{option}</option>
                )}
            </Form.Control>
          </Form.Group>
        </div>

        <Button variant="primary"  type="submit">Vote!</Button>
      </div>
      </form>
    </Form>


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

Poll.handleSubmit= async function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  
  fetch('/api/form-submit-url', {
    method: 'POST',
    body: data,
  });
}

Poll.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:44310/api/poll/${id}`)
  const poll = await res.json()

  console.log(`Fetched show: ${poll.title}`)

  return { poll }
}

export default Poll