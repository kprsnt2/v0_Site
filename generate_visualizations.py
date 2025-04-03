import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from PIL import Image
import json

# Generate a skills radar chart
def create_skills_radar(skills_data):
    categories = [item['category'] for item in skills_data]
    values = [item['value'] for item in skills_data]
    
    # Number of variables
    N = len(categories)
    
    # Create angles for each category
    angles = [n / float(N) * 2 * np.pi for n in range(N)]
    angles += angles[:1]  # Close the loop
    
    # Add values to complete the loop
    values += values[:1]
    
    # Create the plot
    fig, ax = plt.subplots(figsize=(8, 8), subplot_kw=dict(polar=True))
    
    # Draw the outline of our data
    ax.plot(angles, values, linewidth=2, linestyle='solid')
    
    # Fill the area
    ax.fill(angles, values, alpha=0.25)
    
    # Fix axis to go in the right order and start at 12 o'clock
    ax.set_theta_offset(np.pi / 2)
    ax.set_theta_direction(-1)
    
    # Draw axis lines for each angle and label
    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(categories)
    
    # Set y limits
    ax.set_ylim(0, 10)
    
    # Add title
    plt.title('Skills Proficiency', size=15, color='#333333', y=1.1)
    
    # Set background color
    ax.set_facecolor('#f8f9fa')
    fig.patch.set_facecolor('#f8f9fa')
    
    # Save to bytes
    buf = io.BytesIO()
    plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
    buf.seek(0)
    
    # Convert to base64 for embedding in HTML
    img = Image.open(buf)
    buffer = io.BytesIO()
    img.save(buffer, format='PNG')
    buffer.seek(0)
    img_str = base64.b64encode(buffer.read()).decode('utf-8')
    
    plt.close()
    
    return img_str

# Generate a project timeline visualization
def create_project_timeline(projects_data):
    projects = [p['name'] for p in projects_data]
    start_dates = [np.datetime64(p['start_date']) for p in projects_data]
    end_dates = [np.datetime64(p['end_date'] if 'end_date' in p else '2025-04-01') for p in projects_data]
    
    # Calculate duration
    durations = [(end - start).astype('timedelta64[D]').astype(int) for start, end in zip(start_dates, end_dates)]
    
    # Create figure and plot
    fig, ax = plt.subplots(figsize=(12, 6))
    
    # Plot horizontal bars
    y_positions = range(len(projects))
    colors = plt.cm.viridis(np.linspace(0, 0.8, len(projects)))
    
    for i, (start, duration, color) in enumerate(zip(start_dates, durations, colors)):
        ax.barh(i, duration, left=start, height=0.5, color=color, alpha=0.8)
    
    # Customize the plot
    ax.set_yticks(y_positions)
    ax.set_yticklabels(projects)
    ax.set_xlabel('Timeline')
    ax.set_title('Project Timeline', fontsize=15)
    
    # Format the x-axis to show dates
    from matplotlib.dates import DateFormatter
    date_form = DateFormatter("%Y-%m")
    ax.xaxis.set_major_formatter(date_form)
    
    # Set background color
    ax.set_facecolor('#f8f9fa')
    fig.patch.set_facecolor('#f8f9fa')
    
    # Save to bytes
    buf = io.BytesIO()
    plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
    buf.seek(0)
    
    # Convert to base64 for embedding in HTML
    img = Image.open(buf)
    buffer = io.BytesIO()
    img.save(buffer, format='PNG')
    buffer.seek(0)
    img_str = base64.b64encode(buffer.read()).decode('utf-8')
    
    plt.close()
    
    return img_str

# Sample data
skills_data = [
    {'category': 'Python', 'value': 7},
    {'category': 'AI/ML', 'value': 7},
    {'category': 'Web Dev', 'value': 7},
    {'category': 'Data Viz', 'value': 8},
    {'category': 'GCP', 'value': 7},
    {'category': 'DevOps', 'value': 6}
]

projects_data = [
    {'name': 'Gemma3 on Cloud Run', 'start_date': '2023-10-01'},
    {'name': 'AI Story Teller', 'start_date': '2023-07-15', 'end_date': '2023-12-30'},
    {'name': 'AI Tutor', 'start_date': '2023-05-01', 'end_date': '2023-09-30'},
    {'name': 'Plotcharts CSV Analyzer', 'start_date': '2023-02-15', 'end_date': '2023-06-30'},
    {'name': 'Terminal Website', 'start_date': '2022-11-01', 'end_date': '2023-01-30'}
]

# Generate visualizations
skills_chart = create_skills_radar(skills_data)
timeline_chart = create_project_timeline(projects_data)

# Output as JSON for use in the Vue app
output = {
    'skills_chart': skills_chart,
    'timeline_chart': timeline_chart
}

print(json.dumps({'visualizations_generated': True}))
print("Skills and timeline visualizations generated successfully!")

