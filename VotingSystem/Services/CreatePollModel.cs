using System.Collections.Generic;

namespace VotingSystem.Services
{
    public class CreatePollModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public List<string> Options { get; set; }

    }
}