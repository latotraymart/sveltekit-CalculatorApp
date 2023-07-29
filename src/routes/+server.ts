import type { RequestHandler } from '@sveltejs/kit';
import math from 'mathjs';

export async function get(request) {
  const { expression } = request.query;

  try {
    // Safely evaluate the expression using mathjs
    const result = math.evaluate(expression);

    return {
      status: 200,
      body: {
        result,
      },
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'Invalid expression or calculation error.',
      },
    };
  }
}
