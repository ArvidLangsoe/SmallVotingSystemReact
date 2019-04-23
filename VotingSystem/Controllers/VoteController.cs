using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VotingSystem.Services;

namespace VotingSystem.Controllers
{

    [Route("api/[controller]")]
    public class VoteController : Controller
    {
        [HttpPost("{pollId}")]
        public  IActionResult Vote([FromServices] PollService pollService, [FromRoute] int pollId, [FromBody] VoteModel vote) {
            if (!ModelState.IsValid) {
                throw new Exception("Errrrrroooooorrrr");
            }
            return Ok(pollService.AddVote(vote));

        }
    }
}