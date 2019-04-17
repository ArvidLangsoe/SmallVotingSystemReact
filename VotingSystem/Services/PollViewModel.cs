using System.Collections.Generic;

namespace VotingSystem.Services
{
    public class PollViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<string> Options { get; set; }
        public int TotalVotes { get; set; }
        public List<VoteCount> VoteCounts { get; set; }


    }

    public class VoteCount {
        public string Option { get; set; }
        public int Count { get; set; }
    }
}