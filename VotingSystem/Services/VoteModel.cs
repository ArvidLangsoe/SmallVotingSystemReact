namespace VotingSystem.Services
{
    public class VoteModel
    {
        public string Id { get; set; }
        public int PollId { get; set; }
        public string VoteOption { get; set; }
    }
}