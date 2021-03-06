var TestResponses = {
  attemptMove : {
    success_with_valid_move: {
      status: 200,
      responseText: '{"valid":true,"failureMessage":""}'
    },

    success_with_o_wins: {
      status: 200,
      responseText: '{"valid":true,"failureMessage":"O wins! Refresh to play again."}'
    },

    success_with_x_wins: {
      status: 200,
      responseText: '{"valid":true,"failureMessage":"X wins! Refresh to play again."}'
    },

    success_with_no_failure_message: {
      status: 200,
      responseText: '{"valid":false}'
    },

    success_with_invalid_position: {
      status: 200,
      responseText: '{"valid":false,"failureMessage":"Pick a number between 0 and 8."}'
    },

    error: {
      status: 500,
      responseText: '{}'
    }
  }
}
