using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VotingSystem.Model;

namespace VotingSystem.Services
{
    public class PollService
    {
        private readonly Dictionary<int, Poll> _polls = new Dictionary<int, Poll>();
        private static int _counter = 0;

        public PollService()
        {
            SeedData();
        }


        private void SeedData()
        {
            var vote1 = new CreatePollModel()
            {
                Title = "Should we leave the EU already ?",
                Description = "Its about time we leave the EU, it has been years since we voted to leave!",
                Options = new List<string> {
                    "Leave now",
                    "Stay",
                    "New Referendum"
                }
            };
            CreatePoll(vote1);
            Random random = new Random();
            for (int i = 0; i < 5000; i++) {
                var option= vote1.Options[random.Next(vote1.Options.Count)];

                AddVote(new VoteModel()
                {
                    Id = "User" + i,
                    PollId = 0,
                    VoteOption= option
                });
            }
            
        }

        public void CreatePoll(CreatePollModel pollModel)
        {
            Poll newPoll = new Poll
            {
                Id = _counter++,
                Title = pollModel.Title,
                Description = pollModel.Description,
                Options = pollModel.Options
            };

            _polls[newPoll.Id] = newPoll;
        }

        public PollViewModel AddVote(VoteModel voteModel)
        {
            Vote newVote = new Vote()
            {
                Id = voteModel.Id,
                PollId = voteModel.PollId,
                VoteOption = voteModel.VoteOption
            };

            var poll = _polls[newVote.PollId];

            if (!poll.Options.Contains(newVote.VoteOption))
            {
                throw new ArgumentException("Could not find a corresponding voting option.");
            }

            if (poll.Votes.Select(x => x.Id).Contains(newVote.Id))
            {
                throw new ArgumentException("You have already voted!");
            }

            poll.Votes.Add(newVote);
            return GetPoll(voteModel.PollId);
        }

        public List<PollListModel> GetPolls()
        {
            return _polls.Values.Select(x =>
               new PollListModel()
               {
                   Id = x.Id,
                   Title = x.Title,
                   Description = x.Description
               }).ToList();
        }

        public PollViewModel GetPoll(int Id)
        {
            var poll = _polls[Id];
            List<VoteCount> votes = null;
            try
            {
                votes = poll.Votes.GroupBy(x => x.VoteOption).Select(x => new VoteCount
                {
                    Option = x.Key,
                    Count = x.Count()
                }).ToList();
            }
            catch (Exception e) { }

            return new PollViewModel()
            {
                Id = poll.Id,
                Title = poll.Title,
                Description = poll.Title,
                Options = poll.Options,
                VoteCounts = votes,
                TotalVotes = poll.Votes.Count
            };
        }
    }
}
