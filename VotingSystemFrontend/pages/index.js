import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import {Link} from '../routes'

const Index = (props) => (
    <Layout>
        <h1>Polls</h1>
        <p>These are the polls that are currently available.</p>
        <ul>
            {props.polls.map(poll => (
                <li key={poll.id}>
                    <Link route={`poll/${poll.id}`} >
                        <a>{poll.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
    
)

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:44310/api/poll')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
    console.log(data)

    return {
      polls: data
    }
  }
  
  export default Index