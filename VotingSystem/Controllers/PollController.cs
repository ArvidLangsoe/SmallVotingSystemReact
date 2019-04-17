using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VotingSystem.Services;

namespace VotingSystem.Controllers
{

    [Route("api/[controller]")]
    public class PollController : Controller
    {
        [HttpGet("{id}")]
        public  IActionResult GetPoll([FromServices] PollService pollService, int id) {
            if (!ModelState.IsValid) {
                throw new Exception("Errrrrroooooorrrr");
            }
            return Ok(pollService.GetPoll(id));

        }

        [HttpGet]
        public IActionResult GetPolls([FromServices] PollService pollService)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("Errrrrroooooorrrr");
            }
            return Ok(pollService.GetPolls());

        }

        [HttpPost]
        public IActionResult CreatePoll([FromServices] PollService pollService,[FromBody] CreatePollModel createPoll)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("Errrrrroooooorrrr");
            }
            pollService.CreatePoll(createPoll);
            return Ok("Poll created");

        }



    }
}