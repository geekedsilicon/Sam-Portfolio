'use client'

import { useState } from 'react'

interface Course {
  code: string
  title: string
  credits: number
  grade: string
}

interface Semester {
  term: string
  hours: number
  gpa: number
  honors: string | null
  courses: Course[]
}

const USC_SEMESTERS: Semester[] = [
  {
    term: 'Fall 2020',
    hours: 16,
    gpa: 3.906,
    honors: "Dean's List",
    courses: [
      { code: 'AERO 101', title: 'Foundation of US Air Force I', credits: 1, grade: 'A' },
      { code: 'AERO 201', title: 'Evolution of the USAF I', credits: 1, grade: 'A' },
      { code: 'AERO 201L', title: 'Field Training Prep Cadet Leadership Lab I', credits: 0, grade: 'S' },
      { code: 'CSCE 145', title: 'Algorithmic Design I', credits: 4, grade: 'A' },
      { code: 'CSCE 190', title: 'Computing in the Modern World', credits: 1, grade: 'A' },
      { code: 'ECON 224', title: 'Introduction to Economics', credits: 3, grade: 'B+' },
      { code: 'MATH 174', title: 'Discrete Math for Computer Science', credits: 3, grade: 'A' },
      { code: 'MGSC 290', title: 'Computer Info Systems in Business', credits: 3, grade: 'A' },
    ],
  },
  {
    term: 'Spring 2021',
    hours: 15,
    gpa: 3.800,
    honors: "Dean's List",
    courses: [
      { code: 'ENGL 102', title: 'Rhetoric and Composition', credits: 3, grade: 'A' },
      { code: 'ITEC 101', title: 'Thriving in the Tech Age', credits: 3, grade: 'A' },
      { code: 'ITEC 233', title: 'Intro to Computer Hardware & Software', credits: 3, grade: 'B+' },
      { code: 'ITEC 265', title: 'Introduction to Databases', credits: 3, grade: 'B+' },
      { code: 'STAT 201', title: 'Elementary Statistics', credits: 3, grade: 'A' },
    ],
  },
  {
    term: 'Fall 2021',
    hours: 16,
    gpa: 3.688,
    honors: "Dean's List",
    courses: [
      { code: 'CSCE 146', title: 'Algorithmic Design II', credits: 4, grade: 'B+' },
      { code: 'ENGL 463', title: 'Business Writing', credits: 3, grade: 'A' },
      { code: 'ITEC 245', title: 'Introduction to Networking', credits: 3, grade: 'A' },
      { code: 'ITEC 370', title: 'Database Systems in Information Technology', credits: 3, grade: 'B' },
      { code: 'SPTE 240', title: 'Business Law', credits: 3, grade: 'A' },
    ],
  },
  {
    term: 'Spring 2022',
    hours: 15,
    gpa: 4.000,
    honors: "President's List",
    courses: [
      { code: 'HRTM 344', title: 'Personnel Organization & Supervision', credits: 3, grade: 'A' },
      { code: 'ITEC 301', title: 'Professional Internship Seminar', credits: 3, grade: 'A' },
      { code: 'ITEC 362', title: 'Introduction to Web Systems', credits: 3, grade: 'A' },
      { code: 'ITEC 445', title: 'Advanced Networking & Security', credits: 3, grade: 'A' },
      { code: 'ITEC 552', title: 'Linux Programming & Administration', credits: 3, grade: 'A' },
    ],
  },
  {
    term: 'Summer 2022',
    hours: 12,
    gpa: 4.000,
    honors: null,
    courses: [
      { code: 'ITEC 493', title: 'IT Security for Managers', credits: 3, grade: 'A' },
      { code: 'ITEC 495', title: 'Professional Internship', credits: 6, grade: 'A' },
      { code: 'ITEC 560', title: 'Project Management Methods', credits: 3, grade: 'A' },
    ],
  },
  {
    term: 'Fall 2022',
    hours: 12,
    gpa: 3.500,
    honors: "Dean's List",
    courses: [
      { code: 'ACCT 222', title: 'Survey of Accounting', credits: 3, grade: 'B' },
      { code: 'ITEC 444', title: 'Intro to Human Computer Interaction', credits: 3, grade: 'B+' },
      { code: 'ITEC 447', title: 'Management of Information Technology', credits: 3, grade: 'B+' },
      { code: 'ITEC 564', title: 'Capstone Project for Information Technology', credits: 3, grade: 'A' },
    ],
  },
]

function gradeColor(grade: string): string {
  if (grade === 'A') return 'var(--color-phosphor)'
  if (grade === 'B+' || grade === 'B') return 'var(--color-bone)'
  if (grade === 'S') return 'var(--color-bone-dim)'
  return 'var(--color-bone-dim)'
}

export function CourseList() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ marginTop: '1rem' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-mono"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'transparent',
          border: '1px solid var(--color-bone-faint)',
          color: 'var(--color-bone-dim)',
          fontSize: 'var(--text-xs)',
          padding: '0.3rem 0.75rem',
          cursor: 'pointer',
          letterSpacing: '0.08em',
          transition: 'border-color 200ms, color 200ms',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-phosphor)'
          e.currentTarget.style.color = 'var(--color-phosphor)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-bone-faint)'
          e.currentTarget.style.color = 'var(--color-bone-dim)'
        }}
      >
        <span style={{ fontSize: '0.6rem' }}>{open ? '▼' : '▶'}</span>
        {open ? 'HIDE COURSEWORK' : 'VIEW FULL COURSEWORK'}
        <span style={{ opacity: 0.5 }}>· 86 credit hours · 6 semesters</span>
      </button>

      {open && (
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {USC_SEMESTERS.map((sem) => (
            <div
              key={sem.term}
              style={{
                borderLeft: '2px solid var(--color-bone-faint)',
                paddingLeft: '1rem',
              }}
            >
              {/* Semester header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '0.6rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone)', fontWeight: 700 }}
                >
                  {sem.term}
                </span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span
                    className="font-mono"
                    style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)' }}
                  >
                    {sem.hours} cr · GPA {sem.gpa.toFixed(3)}
                  </span>
                  {sem.honors && (
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: sem.honors === "President's List" ? 'var(--color-phosphor)' : 'var(--color-bone-dim)',
                        fontWeight: sem.honors === "President's List" ? 700 : 400,
                      }}
                    >
                      {sem.honors}
                    </span>
                  )}
                </div>
              </div>

              {/* Course rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                {sem.courses.map((course) => (
                  <div
                    key={course.code}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '6.5rem 1fr auto auto',
                      gap: '0.5rem',
                      alignItems: 'baseline',
                    }}
                    className="course-row"
                  >
                    <span
                      className="font-mono"
                      style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', fontWeight: 600 }}
                    >
                      {course.code}
                    </span>
                    <span
                      className="font-mono"
                      style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)' }}
                    >
                      {course.title}
                    </span>
                    <span
                      className="font-mono"
                      style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)', textAlign: 'right' }}
                    >
                      {course.credits > 0 ? `${course.credits} cr` : '—'}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: gradeColor(course.grade),
                        fontWeight: 700,
                        minWidth: '2rem',
                        textAlign: 'right',
                      }}
                    >
                      {course.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Totals row */}
          <div
            style={{
              borderTop: '1px solid var(--color-bone-faint)',
              paddingTop: '0.75rem',
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)' }}>
              INSTITUTION TOTAL
            </span>
            <span className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone)' }}>
              86 credit hours
            </span>
            <span className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-phosphor)', fontWeight: 700 }}>
              GPA 3.820
            </span>
            <span className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)' }}>
              + 39 transfer hours (Presbyterian College · AP)
            </span>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .course-row {
            grid-template-columns: 5.5rem 1fr auto auto !important;
          }
        }
      `}</style>
    </div>
  )
}
