using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystem.Model
{
    public class Poll
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<string> Options { get; set; }

        public List<Vote> Votes { get; set; } = new List<Vote>();
    }
}
