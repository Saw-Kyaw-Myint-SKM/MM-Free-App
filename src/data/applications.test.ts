import { applications } from './applications';
import { getAppStatus } from '../types';

describe('applications data', () => {
  it('has at least one application', () => {
    expect(applications.length).toBeGreaterThan(0);
  });

  it('each application has required fields', () => {
    for (const app of applications) {
      expect(app.id).toBeTruthy();
      expect(app.name).toBeTruthy();
      expect(app.category).toBeTruthy();
      expect(app.version).toMatch(/^\d+\.\d+\.\d+$/);
      expect(app.rating).toBeGreaterThanOrEqual(0);
      expect(app.rating).toBeLessThanOrEqual(5);
      expect(app.screenshots.length).toBeGreaterThan(0);
      expect(app.features.length).toBeGreaterThan(0);
      expect(['available', 'preview', 'disabled']).toContain(getAppStatus(app));
      if (getAppStatus(app) === 'available') {
        expect(app.rating).toBeGreaterThan(0);
      }
    }
  });

  it('supports preview and disabled statuses', () => {
    const statuses = new Set(applications.map((a) => getAppStatus(a)));
    expect(statuses.has('preview') || statuses.has('disabled')).toBe(true);
  });

  it('has unique ids', () => {
    const ids = applications.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
