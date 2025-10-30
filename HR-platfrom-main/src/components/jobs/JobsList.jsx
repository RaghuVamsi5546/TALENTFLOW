import { getApiUrl } from "../../config/api"
import { useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import "./JobsList.css"

export default function JobsList({ jobs = [], onEdit, onArchive, isReordering }) {
  if (!jobs.length) {
    return <div className="jobs-empty monochrome">No jobs found</div>;
  }
  return (
    <div className="jobsbw-list">
      {jobs.map((job) => (
        <div key={job.id} className={`jobsbw-row${job.status === 'archived' ? ' jobsbw-row-archived' : ''}`}>          
          <div className="jobsbw-main">
            <div className="jobsbw-title">{job.title}</div>
            <div className="jobsbw-meta">
              <span className="jobsbw-status">{job.status === 'active' ? 'ACTIVE' : 'ARCHIVED'}</span>
              <span className="jobsbw-date">{new Date(job.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="jobsbw-tags">
              {job.tags?.map((tag) => (
                <span key={tag} className="jobsbw-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="jobsbw-actions">
            <button className="jobsbw-btn-outline" onClick={() => onEdit(job)} disabled={isReordering}>Edit</button>
            <button
              className="jobsbw-btn-outline"
              onClick={() => onArchive(job.id, job.status)}
              disabled={isReordering}
            >
              {job.status === 'active' ? 'Archive' : 'Activate'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
