namespace VotingSystem.Model
{
    public class Vote
    {
        public string Id{ get; set; }
        public int PollId { get; set; }
        public string VoteOption { get; set; }
    }
}