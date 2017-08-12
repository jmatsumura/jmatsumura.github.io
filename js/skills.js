cytoscape({
  container: document.getElementById('cy'),

  layout: {
    name: 'concentric'
  },

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 80, 20, 60)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 2,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'opacity': 0.666,
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'target-arrow-shape': 'triangle',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      }),

  elements: {
    nodes: [
      //{ data: { id: 'Skills', name: 'Skills', weight: 100, faveColor: '#FF6542', faveShape: 'octagon' } },
      { data: { id: 'Programming', name: 'Programming', weight: 100, faveColor: '#b2462e', faveShape: 'triangle' } },
      { data: { id: 'Databases', name: 'Databases', weight: 100, faveColor: '#0c5f87', faveShape: 'triangle' } },
      { data: { id: 'Engineering', name: 'Engineering', weight: 100, faveColor: '#605884', faveShape: 'triangle' } },
      { data: { id: 'Analysis', name: 'Analysis', weight: 100, faveColor: '#6C937B', faveShape: 'triangle' } },

      { data: { id: 'Perl', name: 'Perl', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Python', name: 'Python', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Flask', name: 'Flask', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'JavaScript', name: 'JavaScript', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'HTML', name: 'HTML', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'CSS', name: 'CSS', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'R', name: 'R', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },

      { data: { id: 'GS', name: 'Git/SVN', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Testing Automation', name: 'Testing Automation', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Workflows', name: 'Workflows', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Docker', name: 'Docker', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Virtual Machines', name: 'Virtual Machines', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Linux', name: 'Linux', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Agile', name: 'Agile', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Grid Computing', name: 'Grid Computing', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Cloud Computing', name: 'Cloud Computing', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },

      { data: { id: 'MySQL', name: 'MySQL', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Neo4j', name: 'Neo4j', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Migration', name: 'Migration', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Design', name: 'Design', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'MongoDB', name: 'MongoDB', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'CouchDB', name: 'CouchDB', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },

      { data: { id: 'Statistics', name: 'Statistics', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } },
      { data: { id: 'Visualization', name: 'Visualization', weight: 90, faveColor: '#38AECC', faveShape: 'ellipse' } }
    ],
    edges: [
      //{ data: { source: 'Skills', target: 'Programming', faveColor: '#FF6542', strength: 90 } },
      //{ data: { source: 'Skills', target: 'Engineering', faveColor: '#FF6542', strength: 90 } },
      //{ data: { source: 'Skills', target: 'Databases', faveColor: '#FF6542', strength: 90 } },
      //{ data: { source: 'Skills', target: 'Analysis', faveColor: '#FF6542', strength: 90 } },

      { data: { source: 'Programming', target: 'Perl', faveColor: '#b2462e', strength: 90 } },
      { data: { source: 'Programming', target: 'Python', faveColor: '#b2462e', strength: 90 } },
      { data: { source: 'Programming', target: 'Flask', faveColor: '#b2462e', strength: 90 } },
      { data: { source: 'Programming', target: 'JavaScript', faveColor: '#b2462e', strength: 90 } },
      { data: { source: 'Programming', target: 'HTML', faveColor: '#b2462e', strength: 90 } },
      { data: { source: 'Programming', target: 'CSS', faveColor: '#b2462e', strength: 90 } },
      { data: { source: 'Programming', target: 'R', faveColor: '#b2462e', strength: 90 } },

      { data: { source: 'Databases', target: 'CouchDB', faveColor: '#0c5f87', strength: 90 } },
      { data: { source: 'Databases', target: 'MongoDB', faveColor: '#0c5f87', strength: 90 } },
      { data: { source: 'Databases', target: 'MySQL', faveColor: '#0c5f87', strength: 90 } },
      { data: { source: 'Databases', target: 'Neo4j', faveColor: '#0c5f87', strength: 90 } },
      { data: { source: 'Databases', target: 'Design', faveColor: '#0c5f87', strength: 90 } },
      { data: { source: 'Databases', target: 'Migration', faveColor: '#0c5f87', strength: 90 } },

      { data: { source: 'Engineering', target: 'Agile', faveColor: '#605884', strength: 90 } },
      { data: { source: 'Engineering', target: 'GS', faveColor: '#605884', strength: 90 } },
      { data: { source: 'Engineering', target: 'Linux', faveColor: '#605884', strength: 90 } },
      { data: { source: 'Engineering', target: 'Grid Computing', faveColor: '#605884', strength: 90 } },
      { data: { source: 'Engineering', target: 'Cloud Computing', faveColor: '#605884', strength: 90 } },
      { data: { source: 'Engineering', target: 'Workflows', faveColor: '#605884', strength: 90 } },
      { data: { source: 'Engineering', target: 'Docker', faveColor: '#605884', strength: 90 } },
      { data: { source: 'Engineering', target: 'Virtual Machines', faveColor: '#605884', strength: 90 } },
      { data: { source: 'Engineering', target: 'Testing Automation', faveColor: '#605884', strength: 90 } },

      { data: { source: 'Analysis', target: 'R', faveColor: '#6C937B', strength: 90 } },
      { data: { source: 'Analysis', target: 'Python', faveColor: '#6C937B', strength: 90 } },
      { data: { source: 'Analysis', target: 'Statistics', faveColor: '#6C937B', strength: 90 } },
      { data: { source: 'Analysis', target: 'Visualization', faveColor: '#6C937B', strength: 90 } }
    ]
  },

  ready: function(){
    window.cy = this;
  }
});