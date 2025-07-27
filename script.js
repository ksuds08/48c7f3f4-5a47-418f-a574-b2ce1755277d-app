document.getElementById('resume-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const jobTitle = document.getElementById('job-title').value;
  const industry = document.getElementById('industry').value;
  const experienceLevel = document.getElementById('experience-level').value;

  const response = await fetch('/functions/api/handler.ts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jobTitle,
      industry,
      experienceLevel
    })
  });

  if (response.ok) {
    const result = await response.json();
    document.getElementById('template-content').innerHTML = result.template;
    document.getElementById('template-result').classList.remove('hidden');
  } else {
    console.error('Failed to fetch template');
  }
});